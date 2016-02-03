//
//  platform_patch.h
//  PhoneLottery
//
//  Created by wufan on 15/5/19.
//  Copyright (c) 2015年 DACAI. All rights reserved.
//


#ifndef lottlib_platform_patch_h_
#define lottlib_platform_patch_h_

#include "common_macro.h"

// fix to_string on android ndk
#ifdef OS_PLATFORM_UNIX
#include <sstream>
namespace std {
    template <typename T>
    string to_string(T value)
    {
        std::ostringstream os;
        os << value;
        return os.str() ;
    }
}
#endif

#endif /* lottlib_platform_patch_h_ */