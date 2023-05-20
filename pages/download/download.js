// pages/scan_code/scan_code.js
Page({
    data: {
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

    //下载文件
    downloadFile: function () {
        console.log('name:' + this.data.name + ' date:' + this.data.date + ' phoneNum:' + this.data.phoneNum);
        // 如果姓名，手机号，日期都不为空，则可以下载文件
        if (this.data.name && this.data.phoneNum && this.data.date) {
            wx.downloadFile({
                url: '',        //服务器地址
                success: function (res) {
                    var filePath = res.tempFilePath
                    wx.openDocument({
                        filePath: filePath,
                        success: function (res) {
                            console.log('打开文档成功')
                            wx.showToast({
                                title: '下载成功',
                                icon: 'success',
                                duration: 2000
                            })
                        }
                    })
                }
            })
        }else{
            wx.showToast({
                title: '请填写完整信息',
                icon: 'none',
                duration: 2000
            })
        }
    }
})
