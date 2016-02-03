//
//  common_macro.cpp
//  LotteryLibraryTest
//
//  Created by wufan on 15/5/21.
//  Copyright (c) 2015年 Dacai. All rights reserved.
//

#include "common_macro.h"


#ifdef OS_PLATFORM_WINDOWS

#include <windows.h>

#define MAX_DBG_MSG_LEN     2048

void __dbg_printf (const char * format, ...) {
    char buf[MAX_DBG_MSG_LEN];
    va_list ap;
    va_start(ap, format);
    _vsnprintf_s(buf, MAX_DBG_MSG_LEN, sizeof(buf), format, ap);
    va_end(ap);
    OutputDebugStringA(buf);
}

#undef MAX_DBG_MSG_LEN

#endif