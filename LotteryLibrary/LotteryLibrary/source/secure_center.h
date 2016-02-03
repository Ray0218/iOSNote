//
//  secure_center.h
//  LotteryLibrary
//
//  Created by wufan on 15/4/29.
//  Copyright (c) 2015年 DACAI. All rights reserved.
//
//  安全中心模块, 提供登录注册, 购彩账户开通, 实名认证等功能
//

#ifndef lottlib_secure_center_h_
#define lottlib_secure_center_h_

#include <string>
#include "common_macro.h"
#include "network_caller.h"

namespace lottlib {
    
    typedef enum : int {
        BIND_PHONE,         // 绑定手机
        REPIACE_PHONE,      // 修改已绑定的手机
        FIND_PASSWORD,      // 找回密码
        FIND_PAY_PASSWORD,  // 找回支付密码
    } VaildSMSCodeType;
    
    struct Message;
    class LOTTLIB_API SecureCenter {
    public:
        SecureCenter();
        ~SecureCenter();
        
        /**
         *  登录接口
         *
         *  @param caller    [in]调用者, 接收回调事件
         *  @param user_name [in]用户名
         *  @param password  [in]密码
         *
         *  @return cmdId
         */
        int NwLogin(NetworkCaller caller, std::string user_name, std::string password);
        /**
         *  注册接口
         *
         *  @param caller    [in]调用者, 接收回调事件
         *  @param user_name [in]用户名
         *  @param password  [in]密码
         *
         *  @return cmdId
         */
        int NwRegister(NetworkCaller caller, std::string user_name, std::string password);
        
        // 1. 老用户第一次登录, 2. 未开通过的用户, 充值, 提款, 投注
        
        /**
         *  开通购彩账户第一步, 未绑定过手机. 绑定手机和设置支付密码
         *
         *  @param caller   [in]调用者, 接收回调事件
         *  @param phone    [in]手机号
         *  @param code     [in]短信验证码
         *  @param password [in]支付密码
         *
         *  @return cmdId
         */
        int NwPreOpenup(NetworkCaller caller, std::string phone, std::string code, std::string password);
        /**
         *  开通购彩账户第一步, 已绑定过手机. 设置支付密码
         *
         *  @param caller   [in]调用者, 接收回调事件
         *  @param password [in]支付密码
         *
         *  @return cmdId
         */
        int NwPreOpenup(NetworkCaller caller, std::string password);
        /**
         *  开通购彩中户第二步, 实名认证, 绑定银行卡
         *
         *  @param caller      [in]调用者, 接收回调事件
         *  @param name        [in]姓名
         *  @param identifier  [in]身份证号
         *  @param bank_code   [in]银行卡号
         *  @param bank_name   [in]银行名称
         *  @param bank_city   [in]银行卡归属地, 市
         *  @param bank_region [in]银行卡归属地, 县/区
         *
         *  @return cmdId
         */
        int NwOpenAccount(NetworkCaller caller, std::string name, std::string identifier, std::string bank_code, std::string bank_name, std::string bank_city, std::string bank_region);
        
        // 绑定手机, 找回密码, 找回支付密码, 解绑
        /**
         *  获取手机短信/语音验证码
         *
         *  @param caller [in]调用者, 接收回调事件
         *  @param phone  [in]手机号
         *  @param type   [in]验证类型
         *
         *  @return cmdId
         */
        int NwGetSmsCode(NetworkCaller caller, std::string phone, VaildSMSCodeType type);
        
        /**
         *  获取手机短信/语音验证码过期时间
         *
         *  @param expire [out]过期时间, 单位为秒
         *
         *  @return cmdId
         */
        int GetSmsExpire(int &expire);
        
        
        
        
        
        
        
        int GetUserName(std::string &user_name);
        int GetUserInfo();
        
    private:

        int cbkLogin(int result, Message msg);
        int cbkRegister(int result, Message msg);
        int cbkPreOpenup(int result, Message msg);
        int cbkOpenAccount(int result, Message msg);
        int cbkGetSmsCode(int result, Message msg);
        
        int parseSession(Message msg);
        
        struct {
            std::string user_token;
            byte des_key[8];
            
            std::string user_name;
            bool is_phone_bound;
            std::string phone_number;
            bool have_set_paypwd;
        } user_info_;       // 用户基本信息
        
        struct {
            std::string phone_number;
            std::string sms_code;
            std::string pay_password;
            
            std::string name;
            std::string identifier;
            std::string bank_code;
            std::string bank_name;
            std::string bank_city;
            std::string bank_region;
        } open_account_;    // 开通购彩账户
        
        struct {
            std::string key_id;
            std::string code;
            int expire;
            int type;
        } sms_code_info_;   // 短信验证码相关信息
    };
}

#endif /* defined(lottlib_secure_center_h_) */
