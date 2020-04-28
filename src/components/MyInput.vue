<template>
   <div class="component-input"
   :class="[{
       'lv-input--suffix': clearable,
       'lv-input-group': $slots.prepend || $slots.append,
       'lv-input-group--prepend': $slots.prepend,
       'lv-input-group--append': $slots.append
    }]"
    >
        <!-- 前置元素 -->
        <div class="lv-input-group__prepend" v-if="$slots.prepend">
            <slot name="prepend"></slot>
        </div>
        <input
        class="lv-input"
        ref="input"
        v-bind="$attrs"
        :disabled="inputDisabled"
        @input="handleInput"
        >
        <!-- 后置内容 -->
        <span   
        class="lv-input__suffix"
        v-if="getSuffixVisible()">
            <span class="lv-input__suffix-inner">
                <i v-if="showClear"
                    class="lv-input__icon lv-icon-circle-close lv-input__clear"
                    @click="clearInput"
                ></i>
            </span>
        </span>
        <!-- 后置元素 -->
        <div class="lv-input-group__append" v-if="$slots.append">
            <slot name="append"></slot>
        </div>
        <!-- <button :disabled="inputDisabled">test</button> -->
   </div>
</template>

<script>
export default {
    inheritAttrs: false,
    props: {
        value: {
            type: [String, Number]
        },
        disabled: {
            type: Boolean,
            default: false
        },
        clearable: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        nativeInputValue() {
            return this.value === null || this.value === undefined ? '' : String(this.value)
        },
        inputDisabled() {
            return this.disabled
        },
        showClear() {
            return this.clearable && !this.inputDisabled && this.nativeInputValue
        }
    },
    methods: {
        getInput() {
            return this.$refs.input
        },
        handleInput(event) {
            this.$emit('input', event.target.value)
        },
        getSuffixVisible() {
            return this.showClear
        },
        clearInput() {
            this.$emit('input', "")
            this.$nextTick(() => this.getInput().value = "")
        }
    }
}
</script>

<style lang="less" scoped>

.component-input {
    width: fit-content;
    .lv-input {
        -webkit-appearance: none;
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        height: 40px;
        line-height: 40px;
        outline: none;
        padding: 0 15px;
        transition: border-color .2s cubic-bezier(.645,.045,.355,1);
        // width: 100%;
        &[disabled] {
            // width: 100%;
            background-color: #f5f7fa;
            border-color: #e4e7ed;
            color: #c0c4cc;
        }
        &__suffix {
            position: relative;
            height: 100%;
            right: 10px;
            top: 0;
            margin-left: -10px;
            text-align: center;
            color: #c0c4cc;
            transition: all .3s;
            pointer-events: none;
            &-inner {
                pointer-events: all;
            }
        }
        &__clear {
            color: #c0c4cc;
            font-size: 14px;
            cursor: pointer;
            transition: color .2s cubic-bezier(.645,.045,.355,1);
            &::before {
                content: "X";
            }
        }
        &__icon {
            width: 25px;
            line-height: 40px;
            text-align: center;
        }
    }
    
    [disabled] {
        cursor: not-allowed;
    }
}
.lv-input--suffix {
    .lv-input {
        padding-right: 30px;
    }
}
@inputGroup: lv-input-group;
.@{inputGroup} {
    line-height: normal;
    display: inline-table;
    border-collapse: separate;
    border-spacing: 0;
}
.border-direction-TopOrBottom-radius(@direction) {
    border-top-@{direction}-radius: 0;
    border-bottom-@{direction}-radius: 0;
}
.group__other(@direction) {
    background-color: #f5f7fa;
    color: #909399;
    vertical-align: middle;
    display: table-cell;
    position: relative;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    padding: 0 20px;
    width: 1px;
    white-space: nowrap;
    border-@{direction}: 0;
    .border-direction-TopOrBottom-radius(@direction)
}
.@{inputGroup}--prepend {
    .@{inputGroup}__prepend {
        .group__other(right);
    }
    .lv-input {
        .border-direction-TopOrBottom-radius(left);
        &__suffix {
            &-inner {
                pointer-events: all;
            }
        }
    }
}
.@{inputGroup}--append {
    .@{inputGroup}__append {
        .group__other(left);
    }
    .lv-input {
        .border-direction-TopOrBottom-radius(right);
        &__suffix {
            &-inner {
                pointer-events: all;
            }
        }
    }
}

</style>