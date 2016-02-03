//
//  secure_center.cpp
//  LotteryLibrary
//
//  Created by wufan on 15/4/29.
//  Copyright (c) 2015年 DACAI. All rights reserved.
//

#include <jsoncpp/json.h>
#include "secure_center.h"
#include "network_service.h"
#include "error_code.h"
#include "toolkit.h"

namespace lottlib {
    
    SecureCenter::SecureCenter() {
        
    }
    SecureCenter::~SecureCenter() {
        
    }
    
    int SecureCenter::NwLogin(NetworkCaller caller, std::string user_name, std::string password) {
        int hash_id = HASH_ID(caller);
        Json::Value value;
        value["UserName"] = user_name;
        value["Password"] = password;
        std::string *json = new std::string(Json::FastWriter().write(value));
        return NetworkService::Posts("/", json, 12, hash_id, LOTTLIB_CALLBACK(SecureCenter, cbkLogin));
    }
    
    int SecureCenter::NwRegister(NetworkCaller caller, std::string user_name, std::string password) {
        int hash_id = HASH_ID(caller);
        Json::Value value;
        value["UserName"] = user_name;
        value["Password"] = password;
        std::string *json = new std::string(Json::FastWriter().write(value));
        return NetworkService::Posts("/", json, 12, hash_id, LOTTLIB_CALLBACK(SecureCenter, cbkLogin));
    }
    
    int SecureCenter::NwPreOpenup(NetworkCaller caller, std::string phone, std::string code, std::string password) {
        int hash_id = HASH_ID(caller);
        Json::Value value;
        value["Phone"] = phone;
        value["Code"] = code;
        value["Password"] = password;
        std::string *json = new std::string(Json::FastWriter().write(value));
        return NetworkService::Posts("/", json, 12, hash_id, LOTTLIB_CALLBACK(SecureCenter, cbkLogin));
    }
    
    int SecureCenter::NwPreOpenup(NetworkCaller caller, std::string password) {
        int hash_id = HASH_ID(caller);
        Json::Value value;
        value["Password"] = password;
        std::string *json = new std::string(Json::FastWriter().write(value));
        return NetworkService::Posts("/", json, 12, hash_id, LOTTLIB_CALLBACK(SecureCenter, cbkLogin));
    }
    
    int SecureCenter::NwOpenAccount(NetworkCaller caller, std::string name, std::string identifier, std::string bank_code, std::string bank_name, std::string bank_city, std::string bank_region) {
        int hash_id = HASH_ID(caller);
        Json::Value value;
        value["Name"] = name;
        value["Identifier"] = identifier;
        value["BankCode"] = bank_code;
        value["BankName"] = bank_name;
        value["BankCity"] = bank_city;
        value["BankRegion"] = bank_region;
        std::string *json = new std::string(Json::FastWriter().write(value));
        return NetworkService::Posts("/", json, 12, hash_id, LOTTLIB_CALLBACK(SecureCenter, cbkLogin));
    }
    
    int SecureCenter::NwGetSmsCode(NetworkCaller caller, std::string phone, VaildSMSCodeType type) {
        int hash_id = HASH_ID(caller);
        Json::Value value;
        value["Phone"] = phone;
        value["Type"] = type;
        std::string *json = new std::string(Json::FastWriter().write(value));
        return NetworkService::Posts("/", json, 12, hash_id, LOTTLIB_CALLBACK(SecureCenter, cbkLogin));
    }
    
#pragma mark - 获取数据接口
    int SecureCenter::GetSmsExpire(int &expire) {
        return 0;
    }
    
    
    int SecureCenter::parseSession(Message msg) {
        const Json::Value &value = *msg.json_value;
        user_info_.user_token = value["UserToken"].asString();
        user_info_.user_name = value["UserName"].asString();
        std::string key = value["DESKey"].asString();
        
        unsigned char *raw_data = nullptr;
        int length = math::base64_decode(key.c_str(), static_cast<int>(key.length()), &raw_data);
        DbgAssert(length * sizeof(unsigned char) == sizeof(user_info_.des_key));
        memcpy(user_info_.des_key, raw_data, sizeof(user_info_.des_key));
        if (raw_data) {
            delete [] raw_data;
        }
        return 0;
    }
    
#pragma mark - callback
    int SecureCenter::cbkLogin(int result, Message msg) {
        if (result == ERROR_OK) {
            parseSession(msg);
        }
        return result;
    }
    
    int SecureCenter::cbkRegister(int result, Message msg) {
        if (result == ERROR_OK) {
            parseSession(msg);
        }
        return result;
    }
    
    int SecureCenter::cbkPreOpenup(int result, Message msg) {
        if (result < 0) { return result; }
        return 0;
    }
    
    int SecureCenter::cbkOpenAccount(int result, Message msg) {
        if (result < 0) { return result; }
        return 0;
    }
    
    int SecureCenter::cbkGetSmsCode(int result, Message msg) {
        if (result < 0) { return result; }
        return 0;
    }
}