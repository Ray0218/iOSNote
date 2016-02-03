//
//  game_enum.h
//  LotteryLibrary
//
//  Created by wufan on 15/4/29.
//  Copyright (c) 2015年 DACAI. All rights reserved.
//

#ifndef lottlib_error_code_h_
#define lottlib_error_code_h_

namespace lottlib {
    enum : int {
        /*
         *  成功
         */
        ERROR_OK                    = 0,
        
        /*
         *  网络错误   -1000 < code < 0
         */
        ERROR_OPERATION_TIMEDOUT    = -1,   // 操作超时
        ERROR_COULDNT_RESOLVE_HOST  = -2,   // 域名解析失败
        ERROR_COULDNT_CONNECT       = -3,   // 无法连接到服务器
        ERROR_COULDNT_PARSE_DATA    = -4,   // 无法解析数据
        
        /*
         *  HTTP错误码 -2000 < code <= -1000
         */
        ERROR_HTTP_STATUS_CODE      = -1000,
        
        /*
         *  CURL错误码 -3000 < code <= -2000
         */
        ERROR_CURL_RETURN_CODE      = -2000,
        
        /*
         *  逻辑错误   -4000 < code <= -3000
         */
        ERROR_LOGICAL_ERROR         = -3000,
        ERROR_OUT_OF_BOUNDS         = -3001, // 数组索引越界
        ERROR_INVAILD_LOTTERY       = -3002, // 无效的投注内容, 无法构成一注彩票
        ERROR_SESSION_OUT_OF_DATE   = -3003, // 回话过期
        
        /*
         *  业务错误(服务端的返回)   -5000 < code <= -4000
         */
        ERROR_SERVICE_RETURN        = -4000,
    };
}

#endif /* defined(lottlib_error_code_h_) */
