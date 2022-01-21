<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <!-- 事件委派，加入一个div来做离开事件 -->
      <div @mouseleave="leaveShow" @mouseenter="enterShow">
        <h2 class="all">全部商品分类</h2>
        <!-- 三级联动 -->
        <!-- 过渡动画 -->
        <transition name="sort">
          <div class="sort" v-show="show">
        
          <!-- goSearch方法负责跳转，为性能考虑，不能够被遍历，所以放到循环外面 -->
          <div class="all-sort-list2" @click="goSearch">
            <div
              class="item"
              v-for="(c1, index) in categoryList"
              :key="c1.categoryId"
              :class="{ cur: currentIndex == index }"
            >
              <h3 @mouseenter="changeIndex(index)">
                <a :data-categoryName="c1.categoryName"
                   :data-category1Id="c1.categoryId">{{ c1.categoryName }}</a>
                <!-- 避免出现卡顿现象，因为router-link被创建的实例太多
                <router-link to="/search">{{ c1.categoryName }}</router-link> -->
              </h3>
              <!-- :sytle控制css样式  表示鼠标移动到一级目录，则展示二级目录-->
              <div class="item-list clearfix" :style="{display:currentIndex==index?'block':'none'}">
                <div
                  class="subitem"
                  v-for="(c2, index) in c1.categoryChild"
                  :key="c2.categoryId"
                >
                  <dl class="fore">
                    <dt>
                      <a :data-categoryName="c1.categoryName"
                         :data-category2Id="c2.categoryId">
                         {{ c2.categoryName }}
                      </a>
                      <!-- <router-link to="/search">{{ c2.categoryName }}</router-link> -->
                    </dt>
                    <dd>
                      <em
                        v-for="(c3, index) in c2.categoryChild"
                        :key="c3.categoryId"
                      >
                        <a :data-categoryName="c1.categoryName" :data-category3Id="c3.categoryId">{{ c3.categoryName }}</a>
                        <!-- <router-link to=".search">{{ c3.categoryName }}</router-link> -->
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
        </transition>
      </div>

      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
//引入loadsh
import throttle from 'lodash/throttle'

export default {
  name: "TypeNav",
  data() {
    return {
      currentIndex: -1,
      //只有在home页面时才展示三级联动，在search界面和其他界面不展示
      show:true
    };
  },
  mounted() {
    
  },
  computed: {
    ...mapState({
      categoryList: (state) => {
        return state.home.categoryList;
      },
      //简写
      // categoryList:state=>state.home.categoryList
    }),
  },
  methods: {
    //鼠标进入一级目录，修改颜色的条件

    // 没有引入抖动和节流
    // changeIndex(index) {
    //   this.currentIndex = index;
    // },

    //引入抖动和节流
    changeIndex:throttle(function(index){
      this.currentIndex=index
    },50),

    enterShow(){
      if(this.$route.path != "/home"){
        this.show=true
      }
    },

    //鼠标离开一级目录，失去颜色
    leaveShow() {
      this.currentIndex = -1;
      if(this.$route.path != "/home"){
        this.show=false
      }
    },
    //路由跳转方法
    goSearch(event){
      let element=event.target;
      //获取当前发出 这个时间的所有节点，带有data-categoryName这样的节点一定是a标签
      //节点有一个dataset属性可以获得节点的自定义属性与属性值
      let {categoryname,category1id,category2id,category3id} = element.dataset;

      //当前这个if语句：一定是a标签才会进入
      if(categoryname){
        let location = {name:"search"};
        let query = {categoryName:categoryname}
        //一定是a标签:一级目录
        //注意大小写,驼峰
        if(category1id){
          query.category1Id=category1id;
        }else if(category2id){
          query.category2Id=category2id;
        }else if(category3id){
          query.category3Id=category3id;
        }

        if(this.$route.params){
          location.params=this.$route.params;
          //整理参数
        location.query=query;
        console.log(location)
        this.$router.push(location);
        }

        


      }
    }
  },
};
</script>

<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }
        }

        .cur {
          background: skyblue;
        }
      }
    }

    // 过渡动画
    .sort-enter{
      height: 0px;
    }
    .sort-enter-to{
      height: 461px;
    }
    .sort-enter-active{
      transition: all 0.5s linear;
    }
  }
}
</style>