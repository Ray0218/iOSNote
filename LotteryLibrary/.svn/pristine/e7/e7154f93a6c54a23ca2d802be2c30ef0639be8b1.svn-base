//
//  lottery_zsfy.cpp
//  LotteryLibrary
//
//  Created by wufan on 15/4/29.
//  Copyright (c) 2015年 DACAI. All rights reserved.
//

#include "lottery_zsfy.h"
#include "smart_basket.h"
#include "toolkit.h"
#include "error_code.h"

namespace lottlib {
    
    LotteryZsfy::LotteryZsfy() {
        basket_ = new SmartBasket();
    }
    LotteryZsfy::~LotteryZsfy() {
        delete basket_;
    }
    
#pragma mark - 网络数据相关
    int LotteryZsfy::Cleanup() {
        return 0;
    }
    
    int LotteryZsfy::HasData() {
        return 0;
    }
    
    int LotteryZsfy::GetGameStatus(int &game_name, std::string &deadline, std::string &draw_date) {
        return 0;
    }
    
    int LotteryZsfy::GetHistory(int index, int &game_name, int results[3]) {
        return 0;
    }
    
    int LotteryZsfy::GetMiss(ZsfySubtype subtype, int index, int miss_value[ZSFY_NUMBER_COUNT]) {
        return 0;
    }
    
#pragma mark - 存储相关
    int LotteryZsfy::NotesCalculate(ZsfySubtype subtype, int num1[ZSFY_NUMBER_COUNT], int num2[ZSFY_NUMBER_COUNT], int num3[ZSFY_NUMBER_COUNT]) {
        int count1 = 0;
        int count2 = 0;
        int count3 = 0;
        
        switch (subtype) {  // 丢弃无用的数据
            case ZSFY_SUBTYPE_RENXUAN1:
            case ZSFY_SUBTYPE_RENXUAN2:
            case ZSFY_SUBTYPE_RENXUAN3:
            case ZSFY_SUBTYPE_ZHIXUAN1:
                num2 = nullptr;
            case ZSFY_SUBTYPE_ZHIXUAN2:
                num3 = nullptr;
                break;
            default:
                break;
        }
        
        for (int i = 0; i < ZSFY_NUMBER_COUNT; i++) {
            if (num1 && num1[i]) {
                count1++;
            }
            if (num2 && num2[i]) {
                count2++;
            }
            if (num3 && num3[i]) {
                count3++;
            }
        }
        
        int note = 0;
        
        switch (subtype) {
            case ZSFY_SUBTYPE_RENXUAN1:
                note = count1;
                break;
            case ZSFY_SUBTYPE_RENXUAN2:
                note = math::combination(count1, 2);
                break;
            case ZSFY_SUBTYPE_RENXUAN3:
                note = math::combination(count1, 3);
                break;
            case ZSFY_SUBTYPE_ZHIXUAN1:
                note = count1;
                break;
            case ZSFY_SUBTYPE_ZHIXUAN2:
                note = count1 * count2;
                break;
            case ZSFY_SUBTYPE_ZHIXUAN3:
                note = count1 * count2 * count3;
                break;
            default:
                DbgAssert(false);
                break;
        }
        
        return note;
    }
    
    int LotteryZsfy::GetTarget(int index, ZsfySubtype &subtype, int &note, int num1[ZSFY_NUMBER_COUNT], int num2[ZSFY_NUMBER_COUNT], int num3[ZSFY_NUMBER_COUNT]) {
        int target[CELL_TARGET_NUM_MAX_LEN] = { 0 };
        int type = 0;
        int ret = basket_->GetTarget(index, type, note, target);
        if (ret >= 0) {
            subtype = static_cast<ZsfySubtype>(type);
            switch (subtype) {
                case ZSFY_SUBTYPE_RENXUAN1:
                case ZSFY_SUBTYPE_RENXUAN2:
                case ZSFY_SUBTYPE_RENXUAN3:
                case ZSFY_SUBTYPE_ZHIXUAN1:
                    memcpy(num1, target, sizeof(int) * ZSFY_NUMBER_COUNT);
                    break;
                case ZSFY_SUBTYPE_ZHIXUAN2:
                    memcpy(num1, target, sizeof(int) * ZSFY_NUMBER_COUNT);
                    memcpy(num2, target + ZSFY_NUMBER_COUNT, sizeof(int) * ZSFY_NUMBER_COUNT);
                    break;
                case ZSFY_SUBTYPE_ZHIXUAN3:
                    memcpy(num1, target, sizeof(int) * ZSFY_NUMBER_COUNT);
                    memcpy(num2, target + ZSFY_NUMBER_COUNT, sizeof(int) * ZSFY_NUMBER_COUNT);
                    memcpy(num3, target + ZSFY_NUMBER_COUNT * 2, sizeof(int) * ZSFY_NUMBER_COUNT);
                    break;
                default:
                    DbgAssert(false);
                    break;
            }
        }
        return ret;
    }
    
    int LotteryZsfy::AddTarget(ZsfySubtype subtype, int num1[ZSFY_NUMBER_COUNT], int num2[ZSFY_NUMBER_COUNT], int num3[ZSFY_NUMBER_COUNT]) {
        int note = NotesCalculate(subtype, num1, num2, num3);
        if (note <= 0) {
            return ERROR_INVAILD_LOTTERY;
        }
        int target[CELL_TARGET_NUM_MAX_LEN] = { 0 };
        switch (subtype) {
            case ZSFY_SUBTYPE_RENXUAN1:
            case ZSFY_SUBTYPE_RENXUAN2:
            case ZSFY_SUBTYPE_RENXUAN3:
            case ZSFY_SUBTYPE_ZHIXUAN1:
                memcpy(target, num1, sizeof(int) * ZSFY_NUMBER_COUNT);
                break;
            case ZSFY_SUBTYPE_ZHIXUAN2:
                memcpy(target, num1, sizeof(int) * ZSFY_NUMBER_COUNT);
                memcpy(target + ZSFY_NUMBER_COUNT, num2, sizeof(int) * ZSFY_NUMBER_COUNT);
                break;
            case ZSFY_SUBTYPE_ZHIXUAN3:
                memcpy(target, num1, sizeof(int) * ZSFY_NUMBER_COUNT);
                memcpy(target + ZSFY_NUMBER_COUNT, num2, sizeof(int) * ZSFY_NUMBER_COUNT);
                memcpy(target + ZSFY_NUMBER_COUNT * 2, num3, sizeof(int) * ZSFY_NUMBER_COUNT);
                break;
            default:
                DbgAssert(false);
                break;
        }
        return basket_->AddTarget(subtype, note, target);
    }
    
    int LotteryZsfy::ModifyTarget(int index, ZsfySubtype subtype, int num1[ZSFY_NUMBER_COUNT], int num2[ZSFY_NUMBER_COUNT], int num3[ZSFY_NUMBER_COUNT]) {
        int note = NotesCalculate(subtype, num1, num2, num3);
        if (note <= 0) {
            return ERROR_INVAILD_LOTTERY;
        }
        int target[CELL_TARGET_NUM_MAX_LEN] = { 0 };
        switch (subtype) {
            case ZSFY_SUBTYPE_RENXUAN1:
            case ZSFY_SUBTYPE_RENXUAN2:
            case ZSFY_SUBTYPE_RENXUAN3:
            case ZSFY_SUBTYPE_ZHIXUAN1:
                memcpy(target, num1, sizeof(int) * ZSFY_NUMBER_COUNT);
                break;
            case ZSFY_SUBTYPE_ZHIXUAN2:
                memcpy(target, num1, sizeof(int) * ZSFY_NUMBER_COUNT);
                memcpy(target + ZSFY_NUMBER_COUNT, num2, sizeof(int) * ZSFY_NUMBER_COUNT);
                break;
            case ZSFY_SUBTYPE_ZHIXUAN3:
                memcpy(target, num1, sizeof(int) * ZSFY_NUMBER_COUNT);
                memcpy(target + ZSFY_NUMBER_COUNT, num2, sizeof(int) * ZSFY_NUMBER_COUNT);
                memcpy(target + ZSFY_NUMBER_COUNT * 2, num3, sizeof(int) * ZSFY_NUMBER_COUNT);
                break;
            default:
                DbgAssert(false);
                break;
        }
        return basket_->ModifyTarget(index, subtype, note, target);
    }
    
    int LotteryZsfy::DeleteTarget(int index) {
        return basket_->DeleteTarget(index);
    }
    
    int LotteryZsfy::GetTargetCount() {
        return basket_->GetTargetCount();
    }
    
    int LotteryZsfy::GetTotalNotes() {
        return basket_->GetTotalNotes();
    }
    
    int LotteryZsfy::SetPurchaseInfo(int multiple) {
        return basket_->SetPurchaseInfo(multiple, 1);
    }
    
    int LotteryZsfy::SplitOrders() {
        return basket_->SplitOrders();
    }
    
    int LotteryZsfy::GetOrderCount() {
        return basket_->GetOrderCount();
    }
    
    int LotteryZsfy::GetOrderInfo(int order, int &multiple, int &note) {
        return basket_->GetOrderInfo(order, multiple, note);
    }
    
    int LotteryZsfy::GetOrderTargetCount(int order) {
        return basket_->GetOrderTargetCount(order);
    }
    
    int LotteryZsfy::GetOrderTarget(int order, int index, ZsfySubtype &subtype, int &note, int num1[ZSFY_NUMBER_COUNT], int num2[ZSFY_NUMBER_COUNT], int num3[ZSFY_NUMBER_COUNT]) {
        int target[CELL_TARGET_NUM_MAX_LEN] = { 0 };
        int type = 0;
        int ret = basket_->GetOrderTarget(order, index, type, note, target);
        if (ret >= 0) {
            subtype = static_cast<ZsfySubtype>(type);
            switch (subtype) {
                case ZSFY_SUBTYPE_RENXUAN1:
                case ZSFY_SUBTYPE_RENXUAN2:
                case ZSFY_SUBTYPE_RENXUAN3:
                case ZSFY_SUBTYPE_ZHIXUAN1:
                    memcpy(num1, target, sizeof(int) * ZSFY_NUMBER_COUNT);
                    break;
                case ZSFY_SUBTYPE_ZHIXUAN2:
                    memcpy(num1, target, sizeof(int) * ZSFY_NUMBER_COUNT);
                    memcpy(num2, target + ZSFY_NUMBER_COUNT, sizeof(int) * ZSFY_NUMBER_COUNT);
                    break;
                case ZSFY_SUBTYPE_ZHIXUAN3:
                    memcpy(num1, target, sizeof(int) * ZSFY_NUMBER_COUNT);
                    memcpy(num2, target + ZSFY_NUMBER_COUNT, sizeof(int) * ZSFY_NUMBER_COUNT);
                    memcpy(num3, target + ZSFY_NUMBER_COUNT * 2, sizeof(int) * ZSFY_NUMBER_COUNT);
                    break;
                default:
                    DbgAssert(false);
                    break;
            }
        }
        return ret;
    }
    
    int LotteryZsfy::DeleteOrder(int order) {
        return basket_->DeleteOrder(order);
    }
}