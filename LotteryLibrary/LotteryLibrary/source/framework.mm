//
//  framework.cpp
//  LotteryLibrary
//
//  Created by wufan on 15/4/29.
//  Copyright (c) 2015年 DACAI. All rights reserved.
//

#include "framework.h"
#include "network_service.h"

namespace lottlib {
    
    // 导出模块
    LOTTLIB_API LotteryPs *ModuleLotteryPs = nullptr;
    LOTTLIB_API LotterySyxw *ModuleLotterySyxw = nullptr;
    LOTTLIB_API LotteryEsxw *ModuleLotteryEsxw = nullptr;
    LOTTLIB_API LotteryZsfy *ModuleLotteryZsfy = nullptr;
    LOTTLIB_API LotteryLjy *ModuleLotteryLjy = nullptr;
    LOTTLIB_API LotteryYtdj *ModuleLotteryYtdj = nullptr;
    LOTTLIB_API SecureCenter *ModuleSecureCenter = nullptr;
    LOTTLIB_API MemberCenter *ModuleMemberCenter = nullptr;
    LOTTLIB_API DrawNotice *ModuleDrawNotice = nullptr;
    LOTTLIB_API NewsNotice *ModuleNewsNotice = nullptr;
    
#if defined(OS_PLATFORM_OSX)
    void Framework::Initialize()
#else
    void Framework::Initialize(ResponseDispatcher netproc_func)
#endif
    {
        Framework *framework = new Framework();
        ModuleLotteryPs = framework->lottery_ps_;
        ModuleLotterySyxw = framework->lottery_syxw_;
        ModuleLotteryEsxw = framework->lottery_esxw_;
        ModuleLotteryZsfy = framework->lottery_zsfy_;
        ModuleLotteryLjy = framework->lottery_ljy_;
        ModuleLotteryYtdj = framework->lottery_ytdj_;
        ModuleSecureCenter = framework->secure_center_;
        ModuleMemberCenter = framework->member_center_;
        ModuleDrawNotice = framework->draw_notice_;
        ModuleNewsNotice = framework->news_notice_;
        
        // 启动网络服务
        framework->network_service_->Start();
        
#if defined(OS_PLATFORM_OSX)
        g_dispatcher_func = objc_netproc;
#else
        g_dispatcher_func = netproc_func;
#endif
    }
    
    Framework::Framework() {
        lottery_ps_ = new LotteryPs();
        lottery_syxw_ = new LotterySyxw();
        lottery_esxw_ = new LotteryEsxw();
        lottery_zsfy_ = new LotteryZsfy();
        lottery_ljy_ = new LotteryLjy();
        lottery_ytdj_ = new LotteryYtdj();
        
        member_center_ = new MemberCenter();
        secure_center_ = new SecureCenter();
        news_notice_ = new NewsNotice();
        draw_notice_ = new DrawNotice();
        
        // 使用单例
        network_service_ = NetworkService::defaultService();
    }

    Framework::~Framework() {
    }
}




