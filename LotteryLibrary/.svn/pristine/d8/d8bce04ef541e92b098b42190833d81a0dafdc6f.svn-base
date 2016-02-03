//
//  network_caller.h
//  PhoneLottery
//
//  Created by wufan on 15/5/19.
//  Copyright (c) 2015年 DACAI. All rights reserved.
//

#ifndef lottlib_network_caller_h_
#define lottlib_network_caller_h_

#include "common_macro.h"

#ifdef OS_PLATFORM_OSX
  #include <Foundation/Foundation.h>
  @protocol INetworkCaller <NSObject>
  @property (nonatomic, assign) int objectHashId;
  - (void)callbackId:(int)cmdId result:(int)result type:(int)type;
  @end
  void objc_netproc(int, int, int, int);
#endif

#ifdef OS_PLATFORM_OSX
  #define NetworkCaller       id<INetworkCaller>
  #define HASH_ID(caller)     caller.objectHashId
#else
  #define NetworkCaller       int
  #define HASH_ID(caller)     (caller)
#endif

namespace lottlib {
    // 字节
    typedef unsigned char byte;
    
    // 函数指针, 上层接受网络回调通知函数原型
    typedef void(*ResponseDispatcher)(int, int, int, int);
}

#endif /* defined(__PhoneLottery__network_caller__) */
