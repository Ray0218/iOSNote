//
//  lottery_esxw.cpp
//  LotteryLibrary
//
//  Created by wufan on 15/4/29.
//  Copyright (c) 2015年 DACAI. All rights reserved.
//

#include "lottery_esxw.h"
#include "smart_basket.h"
#include "error_code.h"
#include "toolkit.h"

namespace lottlib {
    
    LotteryEsxw::LotteryEsxw() {
        basket_ = new SmartBasket();
    }
    
    LotteryEsxw::~LotteryEsxw() {
        delete basket_;
    }
    
#pragma mark - 网络数据相关
    int LotteryEsxw::Cleanup() {
        return 0;
    }
    
    int LotteryEsxw::HasData() {
        return 0;
    }
    
    int LotteryEsxw::GetGameStatus(int &game_name, std::string &deadline, std::string &draw_date) {
        return 0;
    }
    
    int LotteryEsxw::GetHistory(int index, int &game_name, int results[5]) {
        return 0;
    }
    
    int LotteryEsxw::GetMiss(int miss_value[ESXW_NUMBER_COUNT]) {
        return 0;
    }
    
#pragma mark - 存储相关
    int LotteryEsxw::NotesCalculate(EsxwSubtype subtype, int num1[ESXW_NUMBER_COUNT], int num2[ESXW_NUMBER_COUNT]) {
        switch (subtype) {
            case ESXW_SUBTYPE_NORMAL: {
                int count = 0;
                for (int i = 0; i < ESXW_NUMBER_COUNT; i++) {
                    if (num1[i]) {
                        count++;
                    }
                }
                return math::combination(count, 5);
            }
            case ESXW_SUBTYPE_DANTUO: {
                int count1 = 0, count2 = 0;
                for (int i = 0; i < ESXW_NUMBER_COUNT; i++) {
                    if (num1[i] && num2[i]) {
                        return ERROR_INVAILD_LOTTERY;
                    }
                    if (num1[i]) {
                        count1++;   // 拖的个数
                    }
                    if (num2[i]) {
                        count2++;   // 胆的个数
                    }
                }
                return math::combination(count1, 5 - count2);
            }
            default:
                DbgAssert(false);
                break;
        }
        
        return ERROR_INVAILD_LOTTERY;
    }
    
    int LotteryEsxw::GetTarget(int index, EsxwSubtype &subtype, int &note, int num1[ESXW_NUMBER_COUNT], int num2[ESXW_NUMBER_COUNT]) {
        int target[CELL_TARGET_NUM_MAX_LEN] = { 0 };
        int type = 0;
        int ret = basket_->GetTarget(index, type, note, target);
        if (ret >= 0) {
            subtype = static_cast<EsxwSubtype>(type);
            switch (subtype) {
                case ESXW_SUBTYPE_DANTUO:
                    memcpy(num2, target + ESXW_NUMBER_COUNT, sizeof(int) * ESXW_NUMBER_COUNT);  // 胆拖num2数据也是有效的, 继续执行到下个case
                case ESXW_SUBTYPE_NORMAL:
                    memcpy(num1, target, sizeof(int) * ESXW_NUMBER_COUNT);
                    break;
                default:
                    DbgAssert(false);
                    break;
            }
        }
        return ret;
    }
    
    int LotteryEsxw::AddTarget(EsxwSubtype subtype, int num1[ESXW_NUMBER_COUNT], int num2[ESXW_NUMBER_COUNT]) {
        int note = NotesCalculate(subtype, num1, num2);
        if (note <= 0) {
            return ERROR_INVAILD_LOTTERY;
        }
        int target[CELL_TARGET_NUM_MAX_LEN] = { 0 };
        switch (subtype) {
            case ESXW_SUBTYPE_DANTUO:
                memcpy(target + ESXW_NUMBER_COUNT, num2, sizeof(int) * ESXW_NUMBER_COUNT);  // 胆拖要将num2记录下来, 继续执行到下个case
            case ESXW_SUBTYPE_NORMAL:
                memcpy(target, num1, sizeof(int) * ESXW_NUMBER_COUNT);
                break;
            default:
                DbgAssert(false);
                break;
        }
        return basket_->AddTarget(subtype, note, target);
    }
    
    int LotteryEsxw::ModifyTarget(int index, EsxwSubtype subtype, int num1[ESXW_NUMBER_COUNT], int num2[ESXW_NUMBER_COUNT]) {
        int note = NotesCalculate(subtype, num1, num2);
        if (note <= 0) {
            return ERROR_INVAILD_LOTTERY;
        }
        int target[CELL_TARGET_NUM_MAX_LEN] = { 0 };
        switch (subtype) {
            case ESXW_SUBTYPE_DANTUO:
                memcpy(target + ESXW_NUMBER_COUNT, num2, sizeof(int) * ESXW_NUMBER_COUNT);  // 胆拖要将num2记录下来, 继续执行到下个case
            case ESXW_SUBTYPE_NORMAL:
                memcpy(target, num1, sizeof(int) * ESXW_NUMBER_COUNT);
                break;
            default:
                DbgAssert(false);
                break;
        }
        return basket_->ModifyTarget(index, subtype, note, target);
    }
    
    int LotteryEsxw::DeleteTarget(int index) {
        return basket_->DeleteTarget(index);
    }
    
    int LotteryEsxw::GetTargetCount() {
        return basket_->GetTargetCount();
    }
    
    int LotteryEsxw::GetTotalNotes() {
        return basket_->GetTotalNotes();
    }
    
    int LotteryEsxw::SetPurchaseInfo(int multiple) {
        return basket_->SetPurchaseInfo(multiple, 1);
    }
    
    int LotteryEsxw::SplitOrders() {
        return basket_->SplitOrders();
    }
    
    int LotteryEsxw::GetOrderCount() {
        return basket_->GetOrderCount();
    }
    
    int LotteryEsxw::GetOrderInfo(int order, int &multiple, int &note) {
        return basket_->GetOrderInfo(order, multiple, note);
    }
    
    int LotteryEsxw::GetOrderTargetCount(int order) {
        return basket_->GetOrderTargetCount(order);
    }
    
    int LotteryEsxw::GetOrderTarget(int order, int index, EsxwSubtype &subtype, int &note, int num1[ESXW_NUMBER_COUNT], int num2[ESXW_NUMBER_COUNT]) {
        int target[CELL_TARGET_NUM_MAX_LEN] = { 0 };
        int type = 0;
        int ret = basket_->GetOrderTarget(order, index, type, note, target);
        if (ret >= 0) {
            subtype = static_cast<EsxwSubtype>(type);
            switch (subtype) {
                case ESXW_SUBTYPE_DANTUO:
                    memcpy(num2, target + ESXW_NUMBER_COUNT, sizeof(int) * ESXW_NUMBER_COUNT);  // 胆拖num2数据也是有效的, 继续执行到下个case
                case ESXW_SUBTYPE_NORMAL:
                    memcpy(num1, target, sizeof(int) * ESXW_NUMBER_COUNT);
                    break;
                default:
                    DbgAssert(false);
                    break;
            }
        }
        return ret;
    }
    
    int LotteryEsxw::DeleteOrder(int order) {
        return basket_->DeleteOrder(order);
    }
    
}
