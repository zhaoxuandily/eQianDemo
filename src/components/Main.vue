<template>
  <div class="app">
    <div class="card">
      <img class="card" src="../assets/card.png">
    </div>
    <grid class="tab-pannel">
      <grid-item  @on-item-click="selected = item.id" 
      v-for="item in list" :key="item.id" class="tab" :class="{ active: selected === item.id }">     
           <p class="tab-title">{{item.title}}</p>
           <p class="tab-number">{{item.number}}</p> 
      </grid-item>
    </grid>
    <div>
      <router-link :to="`/flowdetail/${selected}/${item.id}`" v-for= "item in doclist" :key="item.id">
        <div  class="item-cell clearfix" >
          <div class="col-new clearfix" >
            <img class="new" v-if="item.new" src="../assets/new.png">
          </div>    
          <div class="col-main clearfix">
            <p class="text-title">{{item.title}}</p>
            <p class="text-detail">{{item.name}}</p>
            <p class="text-detail">{{item.date}}</p>
          </div>
          <div class="col-right">
            <span class="text-state">{{item.state}}</span>
          </div>
        </div>
      </router-link>
    </div>
    <router-link to="/myfiles">
      <img class="btn-sign" src="../assets/btn_sign.png"/>
    </router-link>
  </div>    
</template>

<script>
import { Grid, GridItem } from 'vux'

export default {
  components: {
    Grid,
    GridItem
  },

  data () {
    return {
      list: [{
        'id': 1,
        'title': '待我签',
        'number': 3
      }, {
        'id': 2,
        'title': '待他人签',
        'number': 3
      }, {
        'id': 3,
        'title': '已完结',
        'number': 3
      }],
      docs1: [{
        id: 1,
        title: '全日制劳动合同.doc',
        name: '发起人： 李四',
        date: '2016/09/04 10:10',
        state: '',
        new: true
      }, {
        id: 2,
        title: '租房合同.doc',
        name: '发起人： 李四',
        date: '2016/09/04 10:13',
        state: ''
      }, {
        id: 3,
        title: '商务策划合同.doc',
        name: '发起人： 李四',
        date: '2016/09/04 15:20',
        state: ''
      }
      ],
      docs2: [{
        id: 1,
        title: '全日制劳动合同.doc',
        name: '发起人： 张三',
        date: '2016/09/04 10:13',
        state: '我已签署'
      }, {
        id: 2,
        title: '租房合同.doc',
        name: '发起人： 张三',
        date: '2016/09/04 10:13',
        state: '我已签署'
      }, {
        id: 3,
        title: '商务策划合同.doc',
        name: '发起人： 张三',
        date: '2016/09/04 15:23',
        state: '我已签署'
      }
      ],
      docs3: [{
        id: 1,
        title: '全日制劳动合同.doc',
        name: '发起人： 李四',
        date: '2016/09/04 10:13',
        state: '已存证'
      }, {
        id: 2,
        title: '租房合同.doc',
        name: '发起人： 李四',
        date: '2016/09/04 10:13',
        state: '已存证'
      }, {
        id: 3,
        title: '商务策划合同.doc',
        name: '发起人： 张三',
        date: '2016/09/04 15:23',
        state: '已存证'
      }
      ],
      selected: 1
    }
  },

  computed: {
    // 计算属性的 getter
    doclist: function () {
        // `this` 指向 vm 实例
      switch (this.selected) {
        case 1:
          return this.docs1
        case 2:
          return this.docs2
        case 3:
          return this.docs3
        default:
          return this.docs1
      }
    }
  }
}
</script>

<style>
.app{
  position: relative;
  padding-top: 46px;
  box-sizing: border-box;
  height: 100%;
  overflow: auto;
  background: #fff;
}
.clearfix:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: " ";
  clear: both;
  height: 0;
}
.vux-demo {
  text-align: center;
}
.card {
  width: 100%;
}
.tab-pannel{
  box-shadow: 0 3px 3px #cdcdcd;
}
.tab.weui-grid{
  text-align: center;
  color: #45cab4;
  padding: 15px 0 5px ;
}
.tab.active{
  color: #fff;
  background: #45cab4;
}
.tab-number{
  font-size: 2rem;
  line-height:1.5;
}
.item-cell{
  padding: 10px;
  border-bottom: 1px solid #ddd;
  position: relative;
}
.col-new{
  float: left;
  width: 15%;
  padding: 0.3rem 0;
  height: 30px;
}
.new{
  width: 90%;
}
.col-main{
  float: left;
}
.col-right{
    position: absolute;
    right: 15px;
    bottom: 10px;
}
.text-title{
  font-size: 1.1rem;
  color: #333;
}
.text-detail{
  font-size: 0.9rem;
  color: #999;
}
.text-state{
  font-size: 1rem;
  color: #999;
}
.btn-sign{
  position: fixed;
  bottom: 0;
  right: 0;
  width: 98px;
  width: 30vw;
}


</style>
