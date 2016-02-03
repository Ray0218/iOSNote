//
//  common_define.h
//  LotteryLibrary
//
//  Created by wufan on 15/4/30.
//  Copyright (c) 2015年 DACAI. All rights reserved.
//

#ifndef lottlib_common_define_h_
#define lottlib_common_define_h_

#include "common_macro.h"

namespace lottlib {
    // 彩种id
    typedef enum GameTypeId : int {
        GameTypePs,
        GameTypeSyxw,
        GameTypeYtdj,
        GameTypeEsxw,
        GameTypeZsfy,
    } GameTypeId;
}

#endif
