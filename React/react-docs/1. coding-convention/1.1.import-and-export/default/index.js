import React from 'react';

/**
 * @name [Import-from-ExportDefault1]
 */
// Cú pháp 
import ExportDefault1 from './ExportDefault1';

// Khi sử dụng

class ImportDefault1 extends React.Component {
    render() {
        console.log(ExportDefault1)
        /**
         * Kết quả console
         * >> function ExportDefault1() {}
         * Vì vậy trong trường hợp này bạn có thể dùng trực tiếp nó
         */
        /**
         * @Note Luôn luôn dùng cách này để export 1 Component
         */
        return (
            // Use Here
            <ExportDefault1 />
        )
    }
}

/**===================================================
   ===================================================**/

/**
 * @name [Import-from-ExportDefault2]
 */
// Cú pháp 
import ExportDefault2 from './ExportDefault2';

// Khi sử dụng
class ImportDefault2 extends React.Component {
    render() {
        console.log(ExportDefault2)
        /**
         * Kết quả của console
         * >> Object {ExportDefault2: function ExportDefault2()}
         * 
         * Nếu dùng  theo cách 2, nó sẽ trả về 1 object chưa các giá trị mà bạn export
         * Vì vậy ở đây bạn phải access tới key ExportDefault2
         */
        const ExportDefault2Component = ExportDefault2.ExportDefault2;

        /**
         * @Note 
         * - Không dùng cách này để export Component
         * - Một trường hợp dùng cách này là khi bạn muốn 
         *   export multi Component trong file index.js
         */
        return (
            // Use Here
            <ExportDefault2Component />
        )
    }
}

/**
 * CODE DEMO: [https://codesandbox.io/s/judonguyen-export-default-jdg1x]
 */
/**
 * @Note
 * - Cú pháp default này là của ES6. Những trình duyệt cũ nó không support
 * - Nếu bạn muốn chạy tốt trên các trình duyệt cũ thì nên config thêm `babel` để
 * build từ ES6 -> ES5
 */

