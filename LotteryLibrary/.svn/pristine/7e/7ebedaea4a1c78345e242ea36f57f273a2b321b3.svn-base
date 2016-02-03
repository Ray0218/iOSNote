//
//  smart_basket.cpp
//  LotteryLibrary
//
//  Created by wufan on 15/4/29.
//  Copyright (c) 2015年 DACAI. All rights reserved.
//

#include "smart_basket.h"
#include "error_code.h"

namespace lottlib {
    
    int SmartBasket::GetTarget(int index, int &subtype, int &note, int target[CELL_TARGET_NUM_MAX_LEN]) {
        if (index < 0 || index >= target_container_.size()) {
            return ERROR_OUT_OF_BOUNDS;
        }
        int *store_target = target_container_[index];
        subtype = store_target[CELL_TARGET_SUBTYPE_BIT];
        note = store_target[CELL_TARGET_NOTES_BIT];
        memcpy(target, store_target, sizeof(int) * CELL_TARGET_NUM_MAX_LEN);
        // 清除标志位
        target[CELL_TARGET_TYPE_BIT] =
        target[CELL_TARGET_SUBTYPE_BIT] =
        target[CELL_TARGET_MARK_BIT] =
        target[CELL_TARGET_NOTES_BIT] = 0;
        return 0;
    }
    
    int SmartBasket::AddTarget(int subtype, int note, int target[CELL_TARGET_NUM_MAX_LEN]) {
        int *store_target = new int[CELL_TARGET_NUM_MAX_LEN];
        bool mark = false;
        for (int i = 0; i < CELL_TARGET_NUM_MAX_LEN; i++) {
            if ((store_target[i] = target[i]) < 0) {    // 是否设胆
                mark = true;
            }
        }
        store_target[CELL_TARGET_SUBTYPE_BIT] = subtype;
        store_target[CELL_TARGET_NOTES_BIT] = note;
        store_target[CELL_TARGET_MARK_BIT] = mark;
        target_container_.push_back(store_target);
        return 0;
    }
    
    int SmartBasket::ModifyTarget(int index, int subtype, int note, int target[CELL_TARGET_NUM_MAX_LEN]) {
        if (index < 0 || index >= target_container_.size()) {
            return ERROR_OUT_OF_BOUNDS;
        }
        int *store_target = target_container_[index];
        
        bool mark = false;
        for (int i = 0; i < CELL_TARGET_NUM_MAX_LEN; i++) {
            if ((store_target[i] = target[i]) < 0) {    // 是否设胆
                mark = true;
            }
        }
        store_target[CELL_TARGET_SUBTYPE_BIT] = subtype;
        store_target[CELL_TARGET_NOTES_BIT] = note;
        store_target[CELL_TARGET_MARK_BIT] = mark;
        return 0;
    }
    
    int SmartBasket::DeleteTarget(int index) {
        if (index < 0 || index >= target_container_.size()) {
            return ERROR_OUT_OF_BOUNDS;
        }
        delete [] target_container_[index];
        target_container_.erase(target_container_.begin() + index);
        return 0;
    }
    
    int SmartBasket::RemoveAllTargets() {
        for (int i = 0; i < target_container_.size(); i++) {
            delete [] target_container_[i];
        }
        target_container_.clear();
        return 0;
    }
    
    int SmartBasket::GetTargetCount() {
        return static_cast<int>(target_container_.size());
    }
    
    int SmartBasket::GetTotalNotes() {
        int total_note = 0;
        for (int i = 0; i < target_container_.size(); i++) {
            total_note += target_container_[i][CELL_TARGET_NOTES_BIT];
        }
        return total_note;
    }
    
    int SmartBasket::SetPurchaseInfo(int multiple, int follow_count) {
        multiple_ = multiple;
        follow_count_ = follow_count;
        return 0;
    }
    
#pragma mark - 订单拆分
    void SmartBasket::InsertOrder(std::vector<int> &indexes, int note) {
        int total_multiple = multiple_;
        while (total_multiple > 0) {
            int sub_multiple = total_multiple > 99 ? 99 : total_multiple;
            Order order;
            order.note = note;
            order.multiple = sub_multiple;
            order.mapping_indexes = indexes;
            order_list_.push_back(order);
            total_multiple -= sub_multiple;
        }
    }
    
    int SmartBasket::SplitOrders() {
        order_list_.clear();
        std::vector<int> singular_indexes;
        for (int i = 0; i < target_container_.size(); i++) {
            int note = target_container_[i][CELL_TARGET_NOTES_BIT];
            if (note == 1) {
                // 单式满5注为一个订单
                if (singular_indexes.size() >= 5) {
                    InsertOrder(singular_indexes, static_cast<int>(singular_indexes.size()));
                    singular_indexes.clear();
                }
                singular_indexes.push_back(i);
            } else {
                // 复式直接插入
                std::vector<int> plural(1, i);
                InsertOrder(plural, note);
            }
        }
        // 将剩下的加入
        if (singular_indexes.size() > 0) {
            InsertOrder(singular_indexes, static_cast<int>(singular_indexes.size()));
            singular_indexes.clear();
        }
        return 0;
    }
    
    int SmartBasket::GetOrderCount() {
        return static_cast<int>(order_list_.size());
    }
    
    int SmartBasket::GetOrderInfo(int order, int &multiple, int &note) {
        if (order >= order_list_.size()) {
            return ERROR_OUT_OF_BOUNDS;
        }
        multiple = order_list_[order].multiple;
        note = order_list_[order].note;
        return 0;
    }
    
    int SmartBasket::GetOrderTargetCount(int order) {
        if (order >= order_list_.size()) {
            return ERROR_OUT_OF_BOUNDS;
        }
        return static_cast<int>(order_list_[order].mapping_indexes.size());
    }
    
    int SmartBasket::GetOrderTarget(int order, int index, int &subtype, int &note, int target[CELL_TARGET_NUM_MAX_LEN]) {
        if (order >= order_list_.size() || index >= order_list_[order].mapping_indexes.size()) {
            return ERROR_OUT_OF_BOUNDS;
        }
        
        int *store_target = target_container_[order_list_[order].mapping_indexes[index]];
        subtype = store_target[CELL_TARGET_SUBTYPE_BIT];
        note = store_target[CELL_TARGET_NOTES_BIT];
        memcpy(target, store_target, sizeof(int) * CELL_TARGET_NUM_MAX_LEN);
        // 清除标志位
        target[CELL_TARGET_TYPE_BIT] =
        target[CELL_TARGET_SUBTYPE_BIT] =
        target[CELL_TARGET_MARK_BIT] =
        target[CELL_TARGET_NOTES_BIT] = 0;
        return 0;
    }
    
    int SmartBasket::DeleteOrder(int order) {
        if (order >= order_list_.size()) {
            return ERROR_OUT_OF_BOUNDS;
        }
        order_list_.erase(order_list_.begin() + order);
        return 0;
    }
}