//
//  lottery_zsfy.h
//  LotteryLibrary
//
//  Created by wufan on 15/4/29.
//  Copyright (c) 2015年 DACAI. All rights reserved.
//
//  高频: 舟山飞鱼
//

#ifndef lottlib_lottery_zsfy_h_
#define lottlib_lottery_zsfy_h_

#include <string>
#include "common_macro.h"

#define ZSFY_NUMBER_COUNT   8

namespace lottlib {
    
    typedef enum ZsfySubtype : int {
        ZSFY_SUBTYPE_ZHIXUAN1,  // 直选1
        ZSFY_SUBTYPE_ZHIXUAN2,  // 直选2
        ZSFY_SUBTYPE_ZHIXUAN3,  // 直选3
        
        ZSFY_SUBTYPE_RENXUAN1,  // 任选1
        ZSFY_SUBTYPE_RENXUAN2,  // 任选2
        ZSFY_SUBTYPE_RENXUAN3,  // 任选3
    } ZsfySubtype;
    
    class SmartBasket;
    class LOTTLIB_API LotteryZsfy {
    public:
        LotteryZsfy();
        ~LotteryZsfy();
        
#pragma mark - 投注页面数据相关
        /**
         *  请求投注页面数据
         *
         *  @param obj_uuid [in]
         *
         *  @return cmdId
         */
        int NwRefresh(const char *caller);
        
        /**
         *  清空所有数据(包括投注内容和投注页面数据)
         *
         */
        int Cleanup();
        
#pragma mark - 投注页面数据相关
        /**
         *  投注页面是否有数据
         *
         *  @return <0表示失败, 0表示无数据, >0表示有数据
         */
        int HasData();
        
        /**
         *  获取当前期信息
         *
         *  @param game_name [out]期号名称
         *  @param deadline  [out]截止时间
         *  @param draw_date [out]开奖时间
         *
         *  @return <0表示失败, >=0表示成功
         */
        int GetGameStatus(int &game_name, std::string &deadline, std::string &draw_date);
        
        /**
         *  获取历史开奖号码
         *
         *  @param index     [in]距当前期的索引. 上期传0, 上上期传1, 以此类推, 只提供
         *                       近10期的数据, 即值的范围为 0~9
         *  @param game_name [out]期号名称
         *  @param results   [out]开奖号码
         *
         *  @return <0表示失败, 0表示未开奖, >=1表示已开奖
         */
        int GetHistory(int index, int &game_name, int results[3]);
        
        /**
         *  获取遗漏值
         *
         *  @param subtype    [in]子彩种类型
         *  @param index      [in]行索引, e.g. 直选1: 第一行传0, 第二行传1, 第三行传2; 组选: 传0
         *  @param miss_value [out]遗漏值
         *
         *  @return <0表示失败, >=0表示成功
         */
        int GetMiss(ZsfySubtype subtype, int index, int miss_value[ZSFY_NUMBER_COUNT]);
        
#pragma mark - 投注内容数据相关
        
        /**
         *  注数计算
         *
         *  @param subtype [in]彩种类型
         *  @param num1    [in]选号内容, 必选传值
         *  @param num2    [in]选号内容, 直选1, 组选可以传NULL
         *  @param num3    [in]选号内容, 直选1, 直选2, 组选可以传NULL
         *
         *  @note num1, num2, num3数组长度为8
         *
         *  @return <0表示失败, >=0表示计算所得注数
         */
        int NotesCalculate(ZsfySubtype subtype, int num1[ZSFY_NUMBER_COUNT], int num2[ZSFY_NUMBER_COUNT], int num3[ZSFY_NUMBER_COUNT]);
        
        /**
         *  获取中转界面的投注内容(单数或复式)
         *
         *  @param index   [in]在中转界面中的索引
         *  @param subtype [out]彩种类型
         *  @param note    [out]注数
         *  @param num1    [out]选号内容, 必选传值
         *  @param num2    [out]选号内容, 直选1, 组选可以传NULL
         *  @param num3    [out]选号内容, 直选1, 直选2, 组选可以传NULL
         *
         *  @note subtype, note数组长度为1, num1, num2, num3数组长度为8
         *
         *  @return <0表示失败, >=0表示成功
         */
        int GetTarget(int index, ZsfySubtype &subtype, int &note, int num1[ZSFY_NUMBER_COUNT], int num2[ZSFY_NUMBER_COUNT], int num3[ZSFY_NUMBER_COUNT]);
        
        /**
         *  在中转界面头部添加一注内容(单数或复式)
         *
         *  @param subtype [in]彩种类型
         *  @param num1    [in]选号内容, 必选传值
         *  @param num2    [in]选号内容, 直选1, 组选可以传NULL
         *  @param num3    [in]选号内容, 直选1, 直选2, 组选可以传NULL
         *
         *  @note num1, num2, num3数组长度为8
         *
         *  @return <0表示失败, >=0表示成功
         */
        int AddTarget(ZsfySubtype subtype, int num1[ZSFY_NUMBER_COUNT], int num2[ZSFY_NUMBER_COUNT], int num3[ZSFY_NUMBER_COUNT]);
        
        /**
         *  修改中转界面中指定的一注内容(单数或复式)
         *
         *  @param index   [in]在中转界面中的索引
         *  @param subtype [in]彩种类型
         *  @param num1    [in]选号内容, 必选传值
         *  @param num2    [in]选号内容, 直选1, 组选可以传NULL
         *  @param num3    [in]选号内容, 直选1, 直选2, 组选可以传NULL
         *
         *  @note num1, num2, num3数组长度为8
         *
         *  @return <0表示失败, >=0表示成功
         */
        int ModifyTarget(int index, ZsfySubtype subtype, int num1[ZSFY_NUMBER_COUNT], int num2[ZSFY_NUMBER_COUNT], int num3[ZSFY_NUMBER_COUNT]);
        /**
         *  删除中转界面的一注内容
         *
         *  @param index [in]在中转界面中的索引
         *
         *  @return <0表示失败, >=0表示成功
         */
        int DeleteTarget(int index);
        
        /**
         *  获取中转界面总行数
         *
         *  @return <0表示失败, >=0表示总行数
         */
        int GetTargetCount();
        
        /**
         *  获取中转界面总注数
         *
         *  @return <0表示失败, >=0表示总注数
         */
        int GetTotalNotes();
        
        /**
         *  设置下单信息
         *
         *  @param multiple     [in]倍数
         *  @param follow_count [in]追号期数
         *
         *  @return <0表示失败, >=0表示总注数
         */
        int SetPurchaseInfo(int multiple);
        
#pragma mark - 订单详情
        /**
         *  生成订单详情, 拆分投注内容为子订单
         *
         *  @return <0表示失败, >=0表示成功
         */
        int SplitOrders();
        
        /**
         *  获取订单数量
         *
         *  @return <0表示失败, >=0表示订单个数
         */
        int GetOrderCount();
        /**
         *  获取订单信息
         *
         *  @param order    [in]订单索引
         *  @param multiple [out]倍数
         *  @param note     [out]注数
         *
         *  @return <0表示失败, >=0表示成功
         */
        int GetOrderInfo(int order, int &multiple, int &note);
        /**
         *  获取订单中包含的行数
         *
         *  @param order [in]订单索引
         *
         *  @return <0表示失败, >=0表示订单行数
         */
        int GetOrderTargetCount(int order);
        /**
         *  获取中转界面的投注内容(单数或复式)
         *
         *  @param order   [in]订单索引
         *  @param index   [in]在订单中的行数索引
         *  @param subtype [out]彩种类型
         *  @param note    [out]注数
         *  @param num1    [out]选号内容, 必选传值
         *  @param num2    [out]选号内容, 直选1, 组选可以传NULL
         *  @param num3    [out]选号内容, 直选1, 直选2, 组选可以传NULL
         *
         *  @note subtype, note数组长度为1, num1, num2, num3数组长度为8
         *
         *  @return <0表示失败, >=0表示成功
         */
        int GetOrderTarget(int order, int index, ZsfySubtype &subtype, int &note, int num1[ZSFY_NUMBER_COUNT], int num2[ZSFY_NUMBER_COUNT], int num3[ZSFY_NUMBER_COUNT]);
        /**
         *  删除一个子订单
         *
         *  @param order [in]订单索引
         *
         *  @return <0表示失败, >=0表示成功
         */
        int DeleteOrder(int order);
        
    private:
        DISALLOW_COPY_AND_ASSIGN(LotteryZsfy);
        
        SmartBasket *basket_;
    };
}

#endif /* defined(lottlib_lottery_zsfy_h_) */
