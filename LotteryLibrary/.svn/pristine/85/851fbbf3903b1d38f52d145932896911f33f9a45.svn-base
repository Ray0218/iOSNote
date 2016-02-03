//
//  network_service.cpp
//  LotteryLibrary
//
//  Created by wufan on 15/5/11.
//  Copyright (c) 2015年 DACAI. All rights reserved.
//

#include <atomic>
#include <random>
#include <curl/curl.h>
#include <openssl/des.h>
#include <openssl/md5.h>
#include "platform_patch.h"
#include "network_service.h"
#include "network_caller.h"
#include "error_code.h"

namespace lottlib {
    
    // 上层函数, 用于接受网络响应回调
    ResponseDispatcher g_dispatcher_func = nullptr;
    
    // 网络服务单例指针
    static NetworkService *s_network_service = nullptr;
    
    // http 请求方法
    typedef enum HttpMethod : int {
        HTTP_METHOD_GET,
        HTTP_METHOD_POST,
        
    } HttpMethod;
    
    typedef enum CryptoMethod : int {
        CRYPTO_METHOD_NONE,
        CRYPTO_METHOD_DES,
//        CRYPTO_METHOD_3DES,
//        CRYPTO_METHOD_AES,
//        CRYPTO_METHOD_RSA,
    } CryptoMethod;
    
    // http 请求包
    struct Packet {
        int command_serial_number;              // 请求唯一序列号
        int command_type;                       // 请求类型, 上层判断用
        int caller_hash_id;                     // 上层调用者id, 用于接收回调通知
        
        // http请求数据
        struct {
            std::string uri;
            HttpMethod http_method;             // get, post
            CryptoMethod crypto_method;         // 加密算法
            
            // post 裸数据(byte)
            byte *post_raw_body;
            int post_raw_length;
            
            // post JSON格式数据
            std::string *post_json_body;
            
            curl_slist *header_list;            // http 请求头
            CURL *curl_hander;                  // curl句柄
            std::vector<char> *write_buffer;    // content数据缓冲区
        } req;
        
        // http响应数据
        struct {
            time_t date;                        // 服务器时间
            std::string content_type;           // 数据编码格式
            int result;
        } rsp;
        
        // 是否取消该请求, 原子操作
        std::atomic_bool cancel;                // unused
        
        response callback;                      // 请求成功后回调函数
    };
    
    static Packet *packet_init() {
        Packet *packet = new Packet;
        packet->command_serial_number = 0;
        packet->command_type = 0;
        packet->req.http_method = HTTP_METHOD_GET;
        packet->req.post_raw_body = nullptr;
        packet->req.post_raw_length = 0;
        packet->req.post_json_body = nullptr;
        packet->cancel = false;
        packet->req.curl_hander = nullptr;
        packet->req.write_buffer = nullptr;
        packet->callback = nullptr;
        packet->req.header_list = nullptr;
        packet->caller_hash_id = 0;
        return packet;
    }
    
    // 接收http body回调
    static size_t curl_write_callback(char *ptr, size_t size, size_t nitems, Packet *packet) {
        packet->req.write_buffer->insert(packet->req.write_buffer->end(), ptr, ptr + nitems);
        return size * nitems;
    }
    // 接收http header回调
    static size_t curl_header_callback(char *ptr, size_t size, size_t nitems, Packet *packet) {
        const char *DATA_KEY = "Date: ";
        const char *CONTENT_TYPE_KEY = "Content-Type: ";
        
        if (strstr(ptr, DATA_KEY) == ptr) {
            packet->rsp.date = curl_getdate(ptr + strlen(DATA_KEY), nullptr);
        } else if (strstr(ptr, CONTENT_TYPE_KEY) == ptr) {
            packet->rsp.content_type.assign(ptr + strlen(CONTENT_TYPE_KEY), ptr + nitems - 2);
        }
        
        return size * nitems;
    }
    
    // 网络服务类实现
    NetworkService *NetworkService::defaultService() {
        // 库初始化的时候会被调用一次, 不用做多线程处理了
        if (s_network_service == nullptr) {
            s_network_service = new NetworkService();
        }
        return s_network_service;
    }
    
    NetworkService::NetworkService() : thread_(nullptr), time_out_(30) {
        //
//        http_host_ = "http://10.12.2.37:100/v3";
        http_host_ = "http://10.12.2.146:8080";
//        http_host_ = "api.dacai.com/v3";
        
//        // http 请求头
//        if (http_header_lists_) {
//            curl_slist_free_all(http_header_lists_);
//            http_header_lists_ = nullptr;
//        }
//        http_header_lists_ = curl_slist_append(http_header_lists_, "CVersion: 1.3");
//        http_header_lists_ = curl_slist_append(http_header_lists_, "CSession: assfkljdfsakljfas");
//        http_header_lists_ = curl_slist_append(http_header_lists_, "CEncodeing: 0");
        
#ifdef DEBUG
        SetClientInfo("3.25", "appstore", 4, "iPhone 6", "iOS 8.3");
        session_uuid_ = "123456";
        
        
        char key[8] = { '1', '2', '3', '4', '5', '6', '7', '8' };
        memcpy(des_key_, key, 8);
#endif
        
    }
    
    void NetworkService::SetClientInfo(const char *version, const char *channel_name, int channel_id, const char *device_type, const char *os_type) {
        user_agent_.clear();
        user_agent_.append("v");
        user_agent_.append(version);
        user_agent_.append(";");
        user_agent_.append(channel_name);
        user_agent_.append(",");
        user_agent_.append(std::to_string(channel_id));
        user_agent_.append(";");
        user_agent_.append(device_type);
        user_agent_.append(";");
        user_agent_.append(os_type);
        
        app_version_.assign(version);
        channel_id_ = channel_id;
    }
    
    void NetworkService::Start() {
        // 初始化libcurl库
        curl_global_init(CURL_GLOBAL_ALL);
        // 启动网络线程
        thread_ = new std::thread(std::bind(&NetworkService::NetworkWorker, this));
    }
    
    // 工作线程, 从队列中取出请求包进行网络请求
    void NetworkService::NetworkWorker() {
        CURL *curl_handler = curl_easy_init();
        std::vector<char> *http_buffer = new std::vector<char>;
        Packet *packet = nullptr;
        
        while (true) {
            packet = nullptr;
            // 取出等待队列中的请求加入到处理队列中
            packet_queue_mutex_.lock();
            if (!packet_waiting_queue_.empty()) {
                packet = packet_waiting_queue_.front();
                packet_waiting_queue_.pop();
                packet_process_queue_.insert(packet);
            }
            packet_queue_mutex_.unlock();
            
            if (packet) {
                // 复用curl连接
                packet->req.curl_hander = curl_handler;
                packet->req.write_buffer = http_buffer;
                
                // 处理网络请求
                RequestHandler(packet);
                
                // 重置
                curl_easy_reset(curl_handler);
                http_buffer->clear();
                
                packet_queue_mutex_.lock();
                packet_process_queue_.erase(packet);
                packet_queue_mutex_.unlock();
                
                if (packet->callback) {
                    delete packet->callback;
                }
                if (packet->req.post_json_body) {
                    delete packet->req.post_json_body;
                }
                if (packet->req.post_raw_body) {
                    delete packet->req.post_raw_body;
                }
                if (packet->req.header_list) {
                    curl_slist_free_all(packet->req.header_list);
                }
                delete packet;
                
            } else {
                DbgPrint("wait request signal");
                
                // 如果网络请求队列为空, 则挂起线程直至下一个请求到来, 唤醒线程
                std::unique_lock<std::mutex> lck(notify_mutex_);
                notify_cv_.wait(lck);
            }
        }
    }
    
    // 处理网络请求
    void NetworkService::RequestHandler(Packet *packet) {
        DbgPrint("get packet...");
        
        // http://curl.haxx.se/libcurl/c/
        int result = 0;
        Json::Value json_value;
        Message msg = { MESSAGE_TYPE_JSON };
        CURL *curl = ConfigureCURLOpiton(packet);
        CURLcode code = curl_easy_perform(curl);
        switch (code) {
            case CURLE_OK: {
                //
                // CURLcode curl_easy_getinfo(CURL *curl, CURLINFO info, ... );
                // The third argument MUST be a pointer to a long, a pointer to a char *, a pointer to a struct curl_slist * or a pointer to a double
                //
                // 注意使用curl_easy_getinfo获取参数时, 一定要主要第三个参数的类型, 具体见文档, 必须为long *、double *、char *、curl_slist *类型, 否则会破坏堆栈
                //
                
                long http_code = 0;
                curl_easy_getinfo(curl, CURLINFO_HTTP_CODE, &http_code);
                if (http_code != 200) {
                    if (http_code >= 4000) {    // 服务返回的业务错误
                        result = static_cast<int>(-http_code);
                    } else {
                        result = static_cast<int>(ERROR_HTTP_STATUS_CODE - http_code);
                    }
                    break;
                }
                
                if (packet->req.crypto_method == CRYPTO_METHOD_DES) {
                    
                } else {
                    char *content_type = nullptr;
                    curl_easy_getinfo(curl, CURLINFO_CONTENT_TYPE, &content_type);
                    
                    Json::Reader json_reader;
                    if (!json_reader.parse(packet->req.write_buffer->data(),
                                           packet->req.write_buffer->data() + packet->req.write_buffer->size(),
                                           json_value)) {
                        result = ERROR_COULDNT_PARSE_DATA;
                    } else {
                        msg.json_value = &json_value;
                    }
                }
            }
                break;
            case CURLE_COULDNT_RESOLVE_HOST:        // 域名解析失败
                result = ERROR_COULDNT_RESOLVE_HOST;
                break;
            case CURLE_COULDNT_CONNECT:             // 无法连接到服务器
                result = ERROR_COULDNT_CONNECT;
                break;
            case CURLE_OPERATION_TIMEDOUT:          // 操作超时
                result = ERROR_OPERATION_TIMEDOUT;
                break;
            default:
                result = ERROR_CURL_RETURN_CODE - code;
                break;
        }
        
        // 回调处理
        result = (*packet->callback)(result, msg);
        
        // 通知上层调用者
        if (g_dispatcher_func) {
            g_dispatcher_func(packet->caller_hash_id, packet->command_serial_number, result, packet->command_type);
        }
    }
    
    CURL *NetworkService::ConfigureCURLOpiton(Packet *packet) {
        CURL *curl = packet->req.curl_hander;
#if DEBUG
        curl_easy_setopt(curl, CURLOPT_VERBOSE, 1L);
#endif
        curl_easy_setopt(curl, CURLOPT_URL, packet->req.uri.c_str());   // 请求地址
        curl_easy_setopt(curl, CURLOPT_TIMEOUT, time_out_);         // 超时时间
        curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, curl_write_callback);
        curl_easy_setopt(curl, CURLOPT_WRITEDATA, packet);
        curl_easy_setopt(curl, CURLOPT_HEADERFUNCTION, curl_header_callback);
        curl_easy_setopt(curl, CURLOPT_HEADERDATA, packet);
        curl_easy_setopt(curl, CURLOPT_PROTOCOLS, CURLPROTO_HTTP | CURLPROTO_HTTPS);
        
        // 请求方式, POST/GET
        if (packet->req.http_method == HTTP_METHOD_GET) {
            curl_easy_setopt(curl, CURLOPT_HTTPGET, 1L);
        } else {
            curl_easy_setopt(curl, CURLOPT_POST, 1L);
            if (packet->req.post_json_body) {
                curl_easy_setopt(curl, CURLOPT_POSTFIELDS, packet->req.post_json_body->c_str());
                curl_easy_setopt(curl, CURLOPT_POSTFIELDSIZE, packet->req.post_json_body->length());
            } else {
                curl_easy_setopt(curl, CURLOPT_POSTFIELDS, packet->req.post_raw_body);
                curl_easy_setopt(curl, CURLOPT_POSTFIELDSIZE, packet->req.post_raw_length);
            }
        }
        
        // 构造http请求头
        curl_slist *http_header_lists = nullptr;
        std::string header_line;
        // body 加密类型
        header_line.assign("CEncoding: ");
        header_line.append(std::to_string(packet->req.crypto_method));
        http_header_lists = curl_slist_append(http_header_lists, header_line.c_str());
        // 客户端版本号
        header_line.assign("CVersion: ");
        header_line.append(app_version_);
        http_header_lists = curl_slist_append(http_header_lists, header_line.c_str());
//        resource_mutex_.lock();
//        resource_mutex_.unlock();
        packet->req.header_list = http_header_lists;
        
        // http header 相关
        curl_easy_setopt(curl, CURLOPT_ACCEPT_ENCODING, "gzip");
        curl_easy_setopt(curl, CURLOPT_USERAGENT, user_agent_.c_str());
        curl_easy_setopt(curl, CURLOPT_HTTPHEADER, http_header_lists);
        return curl;
    }
    
    int NetworkService::GenerateSerialNumber() {
        const int min_number = 1000;        // 请求序列号的最小值
        const int max_number = 10000;       // 请求序列号的最大值
        static int current_number = min_number;
        static std::mutex mutex;
        
        int number = 0;
        
        // 生成唯一序列号, 介于min_number与max_number之间
        mutex.lock();
        if (current_number > max_number) {
            current_number = min_number;
        }
        number = current_number++;
        mutex.unlock();
        
        return number;
    }
    
    int NetworkService::Serialize(Packet *packet, int command_type, int caller_id, response callback) {
        packet->command_serial_number = GenerateSerialNumber();
        packet->command_type = command_type;
        packet->callback = callback;
        packet->caller_hash_id = caller_id;
        // 锁住队列, 将请求加入队列
        packet_queue_mutex_.lock();
        packet_waiting_queue_.push(packet);
        packet_queue_mutex_.unlock();
        // 唤醒线程
        std::unique_lock<std::mutex> lck(notify_mutex_);
        notify_cv_.notify_all();
        return packet->command_serial_number;
    }
    
    int NetworkService::HttpGet(const char *path, int command_type, int caller_id, response callback) {
        Packet *packet = packet_init();
        packet->req.uri.assign(http_host_);
        packet->req.uri.append(path);
        return Serialize(packet, command_type, caller_id, callback);
    }
    
    
    /*
     *  填充格式:
     *  8 byte | padding byte | data byte | 8 byte
     *
     *  具体格式:
     *  8 byte: 随机流, 最后一字节后3位表示 date byte 补齐 8 byte 需要的字节数, 后3bit的值记为padding
     *  padding byte: 随机流, 即 8byte中的 n
     *  data byte: 源数据
     *  8 byte: 数据校验
     *
     */
    int des_input_stream(const unsigned char *data, int length, unsigned char **block_steam) {
        int mod = length % 8;
        int padding = mod == 0 ? 0 : (8 - mod);
        
        std::default_random_engine generator(static_cast<unsigned int>(time(0)));
        std::uniform_int_distribution<unsigned int> dis;
        
        unsigned char *buffer = new unsigned char[8 + padding + length + 8];
        
        // 生成8+padding字节的随机流
        for (int i = 0; i < 8 + padding; i++) {
            buffer[i] = static_cast<unsigned char>(dis(generator));
        }
        // 第8个字节后3位保存数据长度取余的结果
        buffer[7] &= 0xF8;
        buffer[7] |= 0xFF & padding;
        // 数据
        memcpy(buffer + 8 + padding, data, length);
        // 最后8字节作为数据校验位
        for (int i = 0; i < 8; i++) {
            buffer[8 + padding + length + i] = buffer[i] ^ buffer[8 + padding + length - 1 - i];
        }
        
        *block_steam = buffer;
        return 8 + padding + length + 8;
    }
    
    int NetworkService::HttpsPost(const char *path, std::string *json, int command_type, int caller_id, response callback) {
        Packet *packet = packet_init();
        packet->req.uri.assign(http_host_);
        packet->req.uri.append(path);
        packet->req.http_method = HTTP_METHOD_POST;
        packet->req.crypto_method = CRYPTO_METHOD_DES;
        
        // http://des.online-domain-tools.com/
        // https://www.openssl.org/docs/crypto/
        if (json && json->length() > 0) {
            DbgAssert(session_uuid_.length() > 0);
            
            unsigned char *src_buff = nullptr;
            int length = des_input_stream(reinterpret_cast<const unsigned char *>(json->data()), static_cast<int>(json->length()), &src_buff);
            unsigned char *dst_buff = new unsigned char[length];
            DES_cblock ivec = { 0 };
            const_DES_cblock key = { 0 };
            memcpy(key, des_key_, 8);
            DES_key_schedule ks;
            DES_set_key_unchecked(&key, &ks);
            DES_ncbc_encrypt(src_buff, dst_buff, length, &ks, &ivec, DES_ENCRYPT);
            
            packet->req.post_raw_body = dst_buff;
            packet->req.post_raw_length = length;
            delete [] src_buff;
        } else {
            
        }
        
        if (json) {
            delete json;
        }
        
        return Serialize(packet, command_type, caller_id, callback);
    }
}
