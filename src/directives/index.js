import { useIntersectionObserver } from '@vueuse/core'


//定义图片懒加载插件
export const lazyPlugin = {
    install(app) {
        //懒加载逻辑代码

        // 图片懒加载
        app.directive('img-lazy', {
            mounted(el, binding) {
                //  el:指令绑定的标签元素
                //  bingding: bingding.value 即等于号后面绑定表达式的值，图片url
                // console.log(el, binding);

                const { stop } = useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) => {
                        // console.log(isIntersecting);
                        if (isIntersecting) {
                            // 进入视口  
                            el.src = binding.value
                            stop()
                        }
                    }
                )
            }
        })



    }
}