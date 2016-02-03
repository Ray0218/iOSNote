//
//  smart_basket.h
//  LotteryLibrary
//
//  Created by wufan on 15/4/29.
//  Copyright (c) 2015年 DACAI. All rights reserved.
//
//  投注内容(中转界面)存储单元
//

#ifndef lottlib_smart_basket_h_
#define lottlib_smart_basket_h_

#include <string>
#include <vector>
#include "common_macro.h"

#define CELL_TARGET_TYPE_BIT        70  // 彩种
#define CELL_TARGET_SUBTYPE_BIT     71  // 子玩法
#define CELL_TARGET_MARK_BIT        72  // 是否胆拖
#define CELL_TARGET_NOTES_BIT       73  // 注数

#define CELL_TARGET_NUM_MAX_LEN     80  // 存储区域长度

namespace lottlib {
    
    // 开奖信息
    typedef struct DrawInfo {
        int game_name;      // 期号
        int results[10];    // 开奖号码
        int drawed;         // 该期是否已开奖
    } DrawInfo;
    
    // 期号信息
    typedef struct GameInfo {
        int game_id;        // 期号id
        int game_name;      // 期号名
        
        std::string deadline;   // 截止时间
        std::string draw_date;  // 开奖时间
    } GameInfo;
    
    
    class SmartBasket {
    public:
        SmartBasket() {}
        ~SmartBasket() {}
        
        /**
         *  获取存储的投注内容
         *
         *  @param index   [in]索引
         *  @param subtype [out]玩法类型
         *  @param note    [out]注数
         *  @param target  [out]投注内容
         *
         *  @return <0表示失败, >=0表示成功
         */
        int GetTarget(int index, int &subtype, int &note, int target[CELL_TARGET_NUM_MAX_LEN]);
        /**
         *  添加一行投注内容
         *
         *  @param subtype [in]玩法类型
         *  @param note    [in]注数
         *  @param target  [in]投注内容
         *
         *  @return <0表示失败, >=0表示成功
         */
        int AddTarget(int subtype, int note, int target[CELL_TARGET_NUM_MAX_LEN]);
        /**
         *  修改存储的投注内容
         *
         *  @param index   [in]索引
         *  @param subtype [in]玩法类型
         *  @param note    [in]注数
         *  @param target  [in]投注内容
         *
         *  @return <0表示失败, >=0表示成功
         */
        int ModifyTarget(int index, int subtype, int note, int target[CELL_TARGET_NUM_MAX_LEN]);
        /**
         *  删除一行存储的投注内容
         *
         *  @param index [in]索引
         *
         *  @return <0表示失败, >=0表示成功
         */
        int DeleteTarget(int index);
        /**
         *  删除所有存储的投注内容
         *
         *  @return <0表示失败, >=0表示成功
         */
        int RemoveAllTargets();
        /**
         *  获取总行数
         *
         *  @return <0表示失败, >=0表示总组数
         */
        int GetTargetCount();
        /**
         *  获取总注数
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
        int SetPurchaseInfo(int multiple, int follow_count);
        
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
         *  获取订单中存储的投注内容
         *
         *  @param order   [in]订单索引
         *  @param index   [in]行数索引
         *  @param subtype [out]玩法类型
         *  @param note    [out]注数
         *  @param target  [out]投注内容
         *
         *  @return <0表示失败, >=0表示成功
         */
        int GetOrderTarget(int order, int index, int &subtype, int &note, int target[CELL_TARGET_NUM_MAX_LEN]);
        /**
         *  删除一个子订单
         *
         *  @param order [in]订单索引
         *
         *  @return <0表示失败, >=0表示成功
         */
        int DeleteOrder(int order);
        
    private:
        DISALLOW_COPY_AND_ASSIGN(SmartBasket);
        
        void InsertOrder(std::vector<int> &indexes, int note);
        
        bool has_data_;
        
        GameInfo game_info_;        // 当前期信息
        DrawInfo draw_infos_[10];   // 近10期开奖
        
        // 一个订单(投注内容拆分后的订单)
        typedef struct Order {
            std::vector<int> mapping_indexes;  // 订单内容在target_container_中的索引
            int multiple;   // 倍数
            int note;       // 注数
        } Order;
        
        int multiple_;      // 倍数
        int follow_count_;  // 追号期数
        
        std::vector<int *> target_container_;   // 用户投注内容
        std::vector<Order> order_list_;         // 投注内容拆分后的订单列表
    };
}

#endif /* defined(lottlib_smart_basket_h_) */
