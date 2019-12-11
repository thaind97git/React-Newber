import React from 'react';

/**
 * @name CÁCH1
 * Import Dùng Destructuring
 * Nếu dùng cách này thì có thể dùng trực tiếp trong Component 
 */
import { getCurrentDate, isNumber, getToken, saveToken } from './ExportMultiVariable';

/**
 * @name CÁCH2
 * Import dùng từ khóa `* as`
 */
import * as Utils from './ExportMultiVariable';

class ImportMultiVariable extends React.Component {
    componentWillMount() {
        saveToken("I'm newber ReactJs")
    }
    render() {
        return (
            <div>
                <h1>Cách 1</h1>
                <div> Ngày hiện tại: {getCurrentDate} </div>
                <div>10 có phải là số ? : {isNumber(10) ? "Đúng" : "Sai"}</div>
                <div>Token hiện tại: {getToken()}</div>
                <hr />
                <h1>Cách 2</h1>
                <div> Ngày hiện tại: {Utils.getCurrentDate} </div>
                <div>10a có phải là số ? : {Utils.isNumber("10a") ? "Đúng" : "Sai"}</div>
                <div>Token hiện tại: {Utils.getToken()}</div>
            </div>
        )
    }
}

/**
 * - Các bạn thấy với cách 1, mình có thể dùng trục tiếp trong component mà không cần
 * access thêm 1 key nữa.
 * - Còn với cách 2, khi dùng bạn phải `Utils...`. Dẫn đến bị duplicate rất nhiều lần
 * (Việc này nên tránh tốt nhất có thể)
 *
 * Ở đây mình không nói cái nào đúng cái nào sai. Vì mỗi cách đều sẽ có ưu và nhược riêng
 * tùy vào từng trường hợp. Và tất nhiên mình hay sử dụng cách 1
 */

/**
* CODE DEMO: [https://codesandbox.io/s/judonguyen-export-multi-variable-db0um]
*/

/**
 * @Note
 * - Cú pháp Destructuring này là của ES6. Những trình duyệt cũ nó không support
 * - Nếu bạn muốn chạy tốt trên các trình duyệt cũ thì nên config thêm `babel` để
 * build từ ES6 -> ES5
 */