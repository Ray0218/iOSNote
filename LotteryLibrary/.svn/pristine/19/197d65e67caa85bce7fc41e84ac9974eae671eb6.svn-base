//
//  common_macro.h
//  LotteryLibrary
//
//  Created by wufan on 15/4/29.
//  Copyright (c) 2015年 DACAI. All rights reserved.
//

#ifndef lottlib_common_macro_h_
#define lottlib_common_macro_h_

#include <cassert>

// 区分平台宏
#if defined(__APPLE__)
  #ifndef OS_PLATFORM_OSX
    #define OS_PLATFORM_OSX
  #endif
#elif defined(WIN32)
  #ifndef OS_PLATFORM_WINDOWS
    #define OS_PLATFORM_WINDOWS
  #endif
#else
  #ifndef OS_PLATFORM_UNIX
    #define OS_PLATFORM_UNIX
  #endif
#endif

#ifdef OS_PLATFORM_UNIX
  #include <android/log.h>
#else
  #include <cstdio>
#endif

#ifdef OS_PLATFORM_WINDOWS
  #pragma warning (disable: 4068)
#endif

#ifdef OS_PLATFORM_WINDOWS
  #ifndef CURL_STATICLIB
    #define LOTTLIB_API __declspec(dllimport)
  #else
    #define LOTTLIB_API __declspec(dllexport)
  #endif
#else
  #define LOTTLIB_API
#endif

// VC           : _MSC_VER
// GCC/G++      : __GNUC__
// SunCC        : __SUNPRO_C and __SUNPRO_CC

// 禁止类隐式转换
#define DISALLOW_COPY_AND_ASSIGN(TypeName) \
    TypeName(const TypeName&); \
    void operator=(const TypeName&)

// 声明函数被弃用的宏
#ifdef __GNUC__
  #define DEPRECATED __attribute__((deprecated))
#elif defined(_MSC_VER)
  #define DEPRECATED __declspec(deprecated)
#else
  #pragma message("WARNING: You need to implement DEPRECATED for this compiler")
  #define DEPRECATED
#endif

// DEBUG模式下LOG宏
#ifdef DEBUG
  #if defined(OS_PLATFORM_UNIX)
    #define DbgPrint(format, ...)       __android_log_print(ANDROID_LOG_INFO, "lottlib", format, ##__VA_ARGS__)
  #elif defined(OS_PLATFORM_WINDOWS)
    void __dbg_printf(const char * format, ...);
    #define DbgPrint(format, ...)       __dbg_printf("lottlib => " format, ##__VA_ARGS__)
  #else
    #define DbgPrint(format, ...)       printf("lottlib => " format "\n", ##__VA_ARGS__)
  #endif

  #define DbgAssert(condition)        assert(condition)
#else   /* DEBUG */
  #define DbgPrint(format, ...)       {}
  #define DbgAssert(condition)        {}
#endif  /* DEBUG */

#endif