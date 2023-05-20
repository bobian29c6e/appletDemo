// pages/scan_code/scan_code.js
Page({
    data: {
        //轮播图
        imgUrls: [
            '/image/manhua1.jpg',
            '/image/manhua2.jpg',
            '/image/manhua3.jpg',
        ],
        indicatorDots: true,
        autoplay: true,
        interval: 3000,
        duration: 1000,
    },

    onLoad: function () {
    },

    //输入姓名
    inputName: function (e) {
        this.setData({
            name: e.detail.value
        })
    },

    //输入出生日期
    bindDateChange: function (e) {
        this.setData({
            date: e.detail.value
        })
    },

    //输入手机号
    inputPhoneNum: function (e) {
        this.setData({
            phoneNum: e.detail.value
        })
    },

    //点击确认按钮，向服务器发送POST请求
    confirm: function () {
        console.log('name:' + this.data.name + ' date:' + this.data.date + ' phoneNum:' + this.data.phoneNum);
        //将name，date，phoneNum用POST发送到服务器
        wx.request({
            url: '',            //服务器地址
            menubar: 'POST',    //POST请求
            data: {
                name: this.data.name,
                date: this.data.date,
                phoneNum: this.data.phoneNum
            },
            success(e) {
                console.log(e.data);
                //判单是否上传成功和是否有重复
                if (e.data == 'success') {
                    wx.showToast({
                        title: '上传成功',
                        icon: 'success',
                        duration: 2000
                    })
                }else if(e.data == 'repeat'){
                    wx.showToast({
                        title: '请勿重复上传',
                        icon: 'none',
                        duration: 2000
                    })
                }else{
                    wx.showToast({
                        title: '上传失败',
                        icon: 'none',
                        duration: 2000
                    })
                }
            }
        })

    },
})
