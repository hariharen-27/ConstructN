export function getCount():number{
    const count = localStorage.getItem('clickCount');
    return count ? parseInt(count) : 0;
}
export function setCount(count:Number):void {
    localStorage.setItem('clickCount', count.toString());
}