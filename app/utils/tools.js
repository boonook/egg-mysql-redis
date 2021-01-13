/**
 *对数组进行排序
 * @param array  json对象数组
 * @param key   要排序的key
 * @param order 升序还是降序
 */
exports.orderArray=function orderArray(array,key,order){
  return array.sort(function(index,next){
    let a = index[key];
    let b = next[key];
    if('asc'==order){
      return ((a<b)?-1:((a>b)?1:0))
    }else{
      return ((a>b)?-1:((a<b)?1:0))
    }
  })
};
