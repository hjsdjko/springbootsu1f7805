const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootsu1f7805/",
            name: "springbootsu1f7805",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootsu1f7805/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于JAVA的高校社团管理系统的设计与实现"
        } 
    }
}
export default base
