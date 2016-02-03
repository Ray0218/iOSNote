//
//  network_service.h
//  LotteryLibrary
//
//  Created by wufan on 15/5/11.
//  Copyright (c) 2015年 DACAI. All rights reserved.
//

#ifndef lottlib_network_service_h_
#define lottlib_network_service_h_

#include <string>
#include <functional>
#include <thread>
#include <queue>
#include <map>
#include <set>
#include <mutex>
#include <condition_variable>
#include <jsoncpp/json.h>
#include "common_macro.h"
#include "network_caller.h"

// 绑定std::function
#define LOTTLIB_CALLBACK(cls, func)             new std::function<int(int, Message)>(std::bind(&cls::func, this, std::placeholders::_1, std::placeholders::_2))
#define LOTTLIB_CALLBACK_ARGV(cls, func, ...)   new std::function<int(int, Message)>(std::bind(&cls::func, this, ##__VA_ARGS__))

struct curl_slist;

namespace lottlib {
    
    // 导出函数指针
    extern ResponseDispatcher g_dispatcher_func;
    
    // 网络回调分发给各个模块的消息类型, 结构体
    typedef enum MessageType : int {
        MESSAGE_TYPE_NONE = 0,
        MESSAGE_TYPE_JSON,  // json
        MESSAGE_TYPE_BYTE,  // byte stream
        MESSAGE_TYPE_PROTO, // protobuf
    } MessageType;
    typedef struct Message {
        MessageType type;
        union {
            const Json::Value *json_value;
            const std::vector<unsigned char> *byte_value;
            const void *proto_value;
        };
    } Message;
    
    typedef const std::function<int(int, Message msg)> *response;
    
    struct Packet;
    class NetworkService {
    public:
        static NetworkService *defaultService();
        
        static int Get(const char *path, int command_type, int caller_id, response callback) {
            return defaultService()->HttpGet(path, command_type, caller_id, callback);
        }
//        static int Post(const char *path, byte *raw_data, int raw_length, int command_type, int caller_id, response callback) {
//            return defaultService()->HttpPost(path, raw_data, raw_length, command_type, caller_id, callback);
//        }
        static int Post(const char *path, std::string *json, int command_type, int caller_id, response callback) {
            return defaultService()->HttpPost(path, json, command_type, caller_id, callback);
        }
        
//        static int Gets(const char *path, int command_type, int caller_id, response callback) {
//            return defaultService()->HttpsGet(path, command_type, caller_id, callback);
//        }
        static int Posts(const char *path, std::string *json, int command_type, int caller_id, response callback) {
            return defaultService()->HttpsPost(path, json, command_type, caller_id, callback);
        }
//        static int Posts(const char *path, byte *raw_data, int raw_length, int command_type, int caller_id, response callback) {
//            return defaultService()->HttpsPost(path, raw_data, raw_length, command_type, caller_id, callback);
//        }
        
        // 启动服务
        void Start();
        
        // 设置http header客户端信息
        int SetClientAgent(const char *userAgent);
        
        /**
         *  设置请求超时时间
         *
         *  @param time_out [in]超时时间, 单位为秒
         */
        void SetTimeout(int time_out);
        
        /**
         *  取消指定的网络请求
         *
         *  @param cmdId [in]请求序列号
         */
        void RequestCancel(int cmdId);
        
        /**
         *  取消指定请求者的所有请求
         *
         *  @param caller [in]指定的请求者
         */
        void RequestAllCancel(int caller_id);
        
        /**
         *  设置http请求头
         *
         *  @param version      [in]客户端版本  e.g. "3.15"
         *  @param channel_name [in]渠道名     e.g. "appstore"
         *  @param channel_id   [in]渠道号     e.g. 4
         *  @param device_type  [in]设备类型    e.g. "iPhone 5s"
         *  @param os_type      [in]操作系统    e.g. "iPhone OS 7.1"
         *  @param network_env  [in]网络环境    e.g. "WIFI", "4G", "3G", "2G"
         */
        void SetClientInfo(const char *version, const char *channel_name, int channel_id, const char *device_type, const char *os_type);
        
    private:
        NetworkService();
        ~ NetworkService() {}
        // http 网络请求
        int HttpGet(const char *path, int command_type, int caller_id, response callback);
        int HttpsGet(const char *path, int command_type, int caller_id, response callback);
        
        int HttpPost(const char *path, std::string *json, int command_type, int caller_id, response callback);
        int HttpsPost(const char *path, std::string *json, int command_type, int caller_id, response callback);
        
        int HttpPost(const char *path, byte *raw_data, int raw_length, int command_type, int caller_id, response callback);
        int HttpsPost(const char *path, byte *raw_data, int raw_length, int command_type, int caller_id, response callback);
        
        // 生成网络请求的序列号
        int GenerateSerialNumber();
        // 将网络请求加入请求队列
        int Serialize(Packet *packet, int command_type, int caller_id, response callback);
        // 网络请求处理函数
        void RequestHandler(Packet *packet);
        // 网络线程
        void NetworkWorker();
        // 初始化curl各种参数
        void *ConfigureCURLOpiton(Packet *packet);
        
        std::thread *thread_;               // 请求线程
        
        std::mutex packet_queue_mutex_;           // 队列互斥体
        std::queue<Packet *> packet_waiting_queue_; // 等待处理的网络请求队列
        std::set<Packet *> packet_process_queue_; // 正在处理的网络请求队列
        
        std::mutex notify_mutex_;           // 信号互斥体, 用于唤醒轮询线程
        std::condition_variable notify_cv_; // 信号条件变量, 用于唤醒轮询线程
        
//        std::map<std::string, std::string> http_header_;    // http请求头
        
        //
        std::mutex resource_mutex_; 
        
        std::string app_version_;   // 客户端版本
        int channel_id_;            // 渠道id
        //
        std::string http_host_;
        int time_out_;
        
        // 客户端信息, 仅设置一次
        std::string user_agent_;
        
        // 当前正在处理的请求
        Packet *current_packet_;
        
        // 回话
        std::string session_uuid_;
        unsigned char des_key_[8];
    };
    
}

#endif /* defined(lottlib_networking_h_) */
