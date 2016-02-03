//
//  lottery_syxw.cpp
//  LotteryLibrary
//
//  Created by wufan on 15/4/29.
//  Copyright (c) 2015年 DACAI. All rights reserved.
//

#include "lottery_syxw.h"
#include "smart_basket.h"
#include "toolkit.h"
#include "error_code.h"

namespace lottlib {
    LotterySyxw::LotterySyxw() {
        basket_ = new SmartBasket();
    }

    LotterySyxw::~LotterySyxw() {
        delete basket_;
    }
    
#pragma mark - 网络数据相关
    int LotterySyxw::HasData(){
        return 0;
    }
    
    int LotterySyxw::GetGameStatus(int &game_name, std::string &deadline, std::string &draw_date) {
        return 0;
    }
    
    int LotterySyxw::GetHistory(int index, int &game_name, int results[5]) {
        return 0;
    }
    
    int LotterySyxw::GetMiss(SyxwSubtype subtype, int index, int miss_value[SYXW_NUMBER_COUNT]) {
        return 0;
    }
    
#pragma mark - 存储相关
    int LotterySyxw::NotesCalculate(SyxwSubtype subtype, int num1[SYXW_NUMBER_COUNT], int num2[SYXW_NUMBER_COUNT], int num3[SYXW_NUMBER_COUNT]) {
        int note = 0;
        switch (subtype) {
            case SYXW_SUBTYPE_RENXUAN2:
            case SYXW_SUBTYPE_RENXUAN3:
            case SYXW_SUBTYPE_RENXUAN4:
            case SYXW_SUBTYPE_RENXUAN5:
            case SYXW_SUBTYPE_RENXUAN6:
            case SYXW_SUBTYPE_RENXUAN7:
            case SYXW_SUBTYPE_RENXUAN8: {
                int count = 0;
                for (int i = 0; i < SYXW_NUMBER_COUNT; i++) {
                    if (num1[i]) {
                        count++;
                    }
                }
                note = math::combination(count, subtype - SYXW_SUBTYPE_RENXUAN2 + 2);
            }
                break;
            case SYXW_SUBTYPE_ZHIXUAN1: {
                for (int i = 0; i < SYXW_NUMBER_COUNT; i++) {
                    if (num1[i]) {
                        note++;
                    }
                }
            }
                break;
            case SYXW_SUBTYPE_ZHIXUAN2: {
                int count1 = 0;
                int count2 = 0;
                int repeat = 0;
                for (int i = 0; i < SYXW_NUMBER_COUNT; i++) {
                    if (num1[i]) {
                        count1++;
                    }
                    if (num2[i]) {
                        count2++;
                    }
                    if (num1[i] && num2[i]) {
                        repeat++;
                    }
                }
                note = count1 * count2 - repeat;
            }
                break;
            case SYXW_SUBTYPE_ZHIXUAN3: {
                int count1 = 0, count2 = 0, count3 = 0;
                int repeat = 0, repeat1 = 0, repeat2 = 0, repeat3 = 0;
                for (int i = 0; i < SYXW_NUMBER_COUNT; i++) {
                    if (num1[i]) {
                        count1++;
                    }
                    if (num2[i]) {
                        count2++;
                    }
                    if (num3[i]) {
                        count3++;
                    }
                    if (num1[i] && num2[i] && num3[i]) {
                        repeat++;
                    }
                    if (num1[i] && num2[i]) {
                        repeat3++;
                    }
                    if (num1[i] && num3[i]) {
                        repeat2++;
                    }
                    if (num2[i] && num3[i]) {
                        repeat1++;
                    }
                }
                note = count1 * count2 * count3 - repeat3 * count3 - repeat2 * count2 - repeat1 * count1 + 2 * repeat;
            }
                break;
            case SYXW_SUBTYPE_ZUXUAN2:
            case SYXW_SUBTYPE_ZUXUAN3: {
                int count = 0;
                for (int i = 0; i < SYXW_NUMBER_COUNT; i++) {
                    if (num1[i]) {
                        count++;
                    }
                }
                note = math::combination(count, subtype - SYXW_SUBTYPE_ZUXUAN2 + 2);
            }
                break;
            default:
                break;
        }
        
        return note;
    }
    
    int LotterySyxw::BonusCalculate(SyxwSubtype subtype, int num1[SYXW_NUMBER_COUNT], int num2[SYXW_NUMBER_COUNT], int num3[SYXW_NUMBER_COUNT], int &min_bonus, int &max_bonus) {
        const static int bonus_per_note[12] = {6, 19, 78, 540, 90, 26, 9, 13, 130, 1170, 65, 195};
        int note = NotesCalculate(subtype, num1, num2, num3);
        if (note <= 0) {
            min_bonus = max_bonus = 0;
        } else {
            switch (subtype) {
                case SYXW_SUBTYPE_RENXUAN2:
                case SYXW_SUBTYPE_RENXUAN3:
                case SYXW_SUBTYPE_RENXUAN4:
                    min_bonus = bonus_per_note[subtype];
                    max_bonus = bonus_per_note[subtype] * note;
                    break;
                case SYXW_SUBTYPE_RENXUAN5:
                case SYXW_SUBTYPE_RENXUAN6:
                case SYXW_SUBTYPE_RENXUAN7:
                case SYXW_SUBTYPE_RENXUAN8:
                    min_bonus = max_bonus = bonus_per_note[subtype];
                    break;
                case SYXW_SUBTYPE_ZHIXUAN1:
                case SYXW_SUBTYPE_ZHIXUAN2:
                case SYXW_SUBTYPE_ZHIXUAN3:
                case SYXW_SUBTYPE_ZUXUAN2:
                case SYXW_SUBTYPE_ZUXUAN3:
                    min_bonus = max_bonus = bonus_per_note[subtype];
                    break;
                default:
                    DbgAssert(false);
                    break;
            }
        }
        return note;
    }

    int LotterySyxw::GetTarget(int index, SyxwSubtype &subtype, int &note, int num1[SYXW_NUMBER_COUNT], int num2[SYXW_NUMBER_COUNT], int num3[SYXW_NUMBER_COUNT]) {
        int target[CELL_TARGET_NUM_MAX_LEN] = { 0 };
        int type = 0;
        int ret = basket_->GetTarget(index, type, note, target);
        if (ret >= 0) {
            subtype = static_cast<SyxwSubtype>(type);
            switch (subtype) {
                case SYXW_SUBTYPE_ZHIXUAN3:
                    memcpy(num3, target + SYXW_NUMBER_COUNT * 2, sizeof(int) * SYXW_NUMBER_COUNT);
                case SYXW_SUBTYPE_ZHIXUAN2:
                    memcpy(num2, target + SYXW_NUMBER_COUNT, sizeof(int) * SYXW_NUMBER_COUNT);
                case SYXW_SUBTYPE_ZHIXUAN1:
                case SYXW_SUBTYPE_RENXUAN2:
                case SYXW_SUBTYPE_RENXUAN3:
                case SYXW_SUBTYPE_RENXUAN4:
                case SYXW_SUBTYPE_RENXUAN5:
                case SYXW_SUBTYPE_RENXUAN6:
                case SYXW_SUBTYPE_RENXUAN7:
                case SYXW_SUBTYPE_RENXUAN8:
                case SYXW_SUBTYPE_ZUXUAN2:
                case SYXW_SUBTYPE_ZUXUAN3:
                    memcpy(num1, target, sizeof(int) * SYXW_NUMBER_COUNT);
                    break;
                default:
                    DbgAssert(false);
                    break;
            }
        }
        return ret;
    }
    
    int LotterySyxw::AddTarget(SyxwSubtype subtype, int num1[SYXW_NUMBER_COUNT], int num2[SYXW_NUMBER_COUNT], int num3[SYXW_NUMBER_COUNT]) {
        int note = NotesCalculate(subtype, num1, num2, num3);
        if (note <= 0) {
            return ERROR_INVAILD_LOTTERY;
        }
        int target[CELL_TARGET_NUM_MAX_LEN] = { 0 };
        switch (subtype) {
            case SYXW_SUBTYPE_ZHIXUAN3:
                memcpy(target + SYXW_NUMBER_COUNT * 2, num3, sizeof(int) * SYXW_NUMBER_COUNT);
            case SYXW_SUBTYPE_ZHIXUAN2:
                memcpy(target + SYXW_NUMBER_COUNT, num2, sizeof(int) * SYXW_NUMBER_COUNT);
            case SYXW_SUBTYPE_ZHIXUAN1:
            case SYXW_SUBTYPE_RENXUAN2:
            case SYXW_SUBTYPE_RENXUAN3:
            case SYXW_SUBTYPE_RENXUAN4:
            case SYXW_SUBTYPE_RENXUAN5:
            case SYXW_SUBTYPE_RENXUAN6:
            case SYXW_SUBTYPE_RENXUAN7:
            case SYXW_SUBTYPE_RENXUAN8:
            case SYXW_SUBTYPE_ZUXUAN2:
            case SYXW_SUBTYPE_ZUXUAN3:
                memcpy(target, num1, sizeof(int) * SYXW_NUMBER_COUNT);
                break;
            default:
                DbgAssert(false);
                break;
        }
        return basket_->AddTarget(subtype, note, target);
    }

    int LotterySyxw::ModifyTarget(int index, SyxwSubtype subtype, int num1[SYXW_NUMBER_COUNT], int num2[SYXW_NUMBER_COUNT], int num3[SYXW_NUMBER_COUNT]) {
        int note = NotesCalculate(subtype, num1, num2, num3);
        if (note <= 0) {
            return ERROR_INVAILD_LOTTERY;
        }
        int target[CELL_TARGET_NUM_MAX_LEN] = { 0 };
        switch (subtype) {
            case SYXW_SUBTYPE_ZHIXUAN3:
                memcpy(target + SYXW_NUMBER_COUNT * 2, num3, sizeof(int) * SYXW_NUMBER_COUNT);
            case SYXW_SUBTYPE_ZHIXUAN2:
                memcpy(target + SYXW_NUMBER_COUNT, num2, sizeof(int) * SYXW_NUMBER_COUNT);
            case SYXW_SUBTYPE_ZHIXUAN1:
            case SYXW_SUBTYPE_RENXUAN2:
            case SYXW_SUBTYPE_RENXUAN3:
            case SYXW_SUBTYPE_RENXUAN4:
            case SYXW_SUBTYPE_RENXUAN5:
            case SYXW_SUBTYPE_RENXUAN6:
            case SYXW_SUBTYPE_RENXUAN7:
            case SYXW_SUBTYPE_RENXUAN8:
            case SYXW_SUBTYPE_ZUXUAN2:
            case SYXW_SUBTYPE_ZUXUAN3:
                memcpy(target, num1, sizeof(int) * SYXW_NUMBER_COUNT);
                break;
            default:
                DbgAssert(false);
                break;
        }
        return basket_->ModifyTarget(index, subtype, note, target);
    }

    int LotterySyxw::DeleteTarget(int index) {
        return basket_->DeleteTarget(index);
    }

    int LotterySyxw::GetTargetCount() {
        return basket_->GetTargetCount();
    }

    int LotterySyxw::GetTotalNotes() {
        return basket_->GetTotalNotes();
    }
    
    int LotterySyxw::SetPurchaseInfo(int multiple) {
        return basket_->SetPurchaseInfo(multiple, 1);
    }
    
    int LotterySyxw::SplitOrders() {
        return basket_->SplitOrders();
    }
    
    int LotterySyxw::GetOrderCount() {
        return basket_->GetOrderCount();
    }
    
    int LotterySyxw::GetOrderInfo(int order, int &multiple, int &note) {
        return basket_->GetOrderInfo(order, multiple, note);
    }
    
    int LotterySyxw::GetOrderTargetCount(int order) {
        return basket_->GetOrderTargetCount(order);
    }
    
    int LotterySyxw::GetOrderTarget(int order, int index, SyxwSubtype &subtype, int &note, int num1[SYXW_NUMBER_COUNT], int num2[SYXW_NUMBER_COUNT], int num3[SYXW_NUMBER_COUNT]) {
        int target[CELL_TARGET_NUM_MAX_LEN] = { 0 };
        int type = 0;
        int ret = basket_->GetOrderTarget(order, index, type, note, target);
        if (ret >= 0) {
            subtype = static_cast<SyxwSubtype>(type);
            switch (subtype) {
                case SYXW_SUBTYPE_ZHIXUAN3:
                    memcpy(num3, target + SYXW_NUMBER_COUNT * 2, sizeof(int) * SYXW_NUMBER_COUNT);
                case SYXW_SUBTYPE_ZHIXUAN2:
                    memcpy(num2, target + SYXW_NUMBER_COUNT, sizeof(int) * SYXW_NUMBER_COUNT);
                case SYXW_SUBTYPE_ZHIXUAN1:
                case SYXW_SUBTYPE_RENXUAN2:
                case SYXW_SUBTYPE_RENXUAN3:
                case SYXW_SUBTYPE_RENXUAN4:
                case SYXW_SUBTYPE_RENXUAN5:
                case SYXW_SUBTYPE_RENXUAN6:
                case SYXW_SUBTYPE_RENXUAN7:
                case SYXW_SUBTYPE_RENXUAN8:
                case SYXW_SUBTYPE_ZUXUAN2:
                case SYXW_SUBTYPE_ZUXUAN3:
                    memcpy(num1, target, sizeof(int) * SYXW_NUMBER_COUNT);
                    break;
                default:
                    DbgAssert(false);
                    break;
            }
        }
        return ret;
    }
    
    int LotterySyxw::DeleteOrder(int order) {
        return basket_->DeleteOrder(order);
    }
}