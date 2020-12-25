// 防抖方法

let debounce = ( fn, wait ) => {
    let timer = null;
    return () => {
        if( timer !== null ) {
            clearTimeout( timer );
        }
        timer = setTimeout( fn, wait );
    };
};

function _debounce(fn, wait) {
    let timer = null;
    return function () {
        let context = this
        let args = arguments
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimeout(function () {
            fn.apply(context, args)
        }, wait)
    }
}

export { debounce, _debounce };

