//
//  framework.h
//  LotteryLibrary
//
//  Created by wufan on 15/4/29.
//  Copyright (c) 2015年 DACAI. All rights reserved.
//
//  框架类
//

#ifndef lottlib_framework_h_
#define lottlib_framework_h_

#include "common_macro.h"
#include "network_caller.h"
#include "lottery_ps.h"
#include "lottery_syxw.h"
#include "lottery_zsfy.h"
#include "lottery_esxw.h"
#include "lottery_ljy.h"
#include "lottery_ytdj.h"
#include "secure_center.h"
#include "member_center.h"
#include "news_notice.h"
#include "draw_notice.h"

namespace lottlib {
    
    extern LOTTLIB_API LotteryPs *ModuleLotteryPs;
    extern LOTTLIB_API LotterySyxw *ModuleLotterySyxw;
    extern LOTTLIB_API LotteryEsxw *ModuleLotteryEsxw;
    extern LOTTLIB_API LotteryZsfy *ModuleLotteryZsfy;
    extern LOTTLIB_API LotteryLjy *ModuleLotteryLjy;
    extern LOTTLIB_API LotteryYtdj *ModuleLotteryYtdj;
    extern LOTTLIB_API SecureCenter *ModuleSecureCenter;
    extern LOTTLIB_API MemberCenter *ModuleMemberCenter;
    extern LOTTLIB_API DrawNotice *ModuleDrawNotice;
    extern LOTTLIB_API NewsNotice *ModuleNewsNotice;

    class NetworkService;
    class LOTTLIB_API Framework {
    public:
        
#if defined(OS_PLATFORM_OSX)
        static void Initialize();
#else
        static void Initialize(ResponseDispatcher netproc_func);
#endif

//        LotteryEsxw *lottery_esxw() const {
//            return lottery_esxw_;
//        }
//        LotteryPs *lottery_ps() const {
//            return lottery_ps_;
//        }
//        LotteryZsfy *lottery_zsfy() const {
//            return lottery_zsfy_;
//        }
//        LotterySyxw *lottery_syxw() const {
//            return lottery_syxw_;
//        }
//        LotteryLjy *lottery_ljy() const {
//            return lottery_ljy_;
//        }
//        LotteryYtdj *lottery_ytdj() const {
//            return lottery_ytdj_;
//        }
        
    private:
        DISALLOW_COPY_AND_ASSIGN(Framework);
        
        Framework();
        ~Framework();
        
        LotteryEsxw *lottery_esxw_;
        LotteryPs *lottery_ps_;
        LotterySyxw *lottery_syxw_;
        LotteryZsfy *lottery_zsfy_;
        LotteryLjy *lottery_ljy_;
        LotteryYtdj *lottery_ytdj_;
        
        SecureCenter *secure_center_;
        MemberCenter *member_center_;
        DrawNotice *draw_notice_;
        NewsNotice *news_notice_;
        
        NetworkService *network_service_;
    };

}

#endif /* defined(lottlib_framework_h_) */