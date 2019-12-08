
/**
 * @name React-Import
 * Đây là cú pháp import của React
 * - một file React luôn luôn phải có câu lệnh này 
 */
import React from 'react';

/**
 * @name Create-React-Class
 * Với class của React, các bạn đừng suy nghĩ gì quá cao siêu về nó.
 * Hãy nhìn đơn giản nó cũng chỉ là một class bình thường như trong OOP 
 * và được kế thừa lại các thuộc tính trong `COMPONENT CỦA REACT` đã implement
 * (Cụ thể một số thuộc tính là: 
 *      render(){}, 
 *      componentDidMount(){}, 
 *      componentDidUpdate(){}, ...)
 */
class ReactClassComponent extends React.Component {
    /**
     * @name Constructor
     * @param {Object} props
     * Đây là hàm để khởi tạo props của React 
     * Các bạn nên tìm hiểu về class thêm để hiểu constructor là gì
     * React Docs: [https://reactjs.org/docs/react-component.html#constructor]  
     */
    constructor(props) {
        super(props)
        /**
         * @name React-State
         * - State là một object lưu trữ trạng thái component của bạn
         * - Nó luôn luôn phải là một object với muilti keys nếu không
         * sẽ có warning: `Warning: App.state: must be set to an object or null`
         * - Giá trị các key trong `this.state` sẽ là giá trị khởi tạo của bạn
         * - Nếu bạn có khởi tạo constructor, thì phải khai báo là `this.state` và nằm
         * trong constructor . 
         *   Nếu không khởi tạo constructor, khai báo nó là `state`
         * 
         * @Note Không khuyến khích dùng cách 2.
         * React Docs: [https://reactjs.org/docs/react-component.html#state]
         */
        this.state = {
            username: "",
            password: ""
        }
    }

    /**================Life Cycle==================*/

    /**
     * @name MOUNTING 
     * - Một Component thực hiện Mounting chỉ khi nó được render lần đầu tiên. 
     *      1.componentWillMount
     *      2.render
    *       3.componentDidMount
     * vì đến lần thứ 2 render nó sẽ chạy 1 life cycle khác
     */
    componentWillMount() {
        /**
         * - Phương thức này được gọi trước khi Component được render.
         * - Nó tương tự như `$(document).ready()` trog jquery
         * - Khi phương thức này được gọi, DOM vẫn chưa được sinh ra
         * - Kể từ phiên bản `16.999.0, phương thức này không được dùng nữa
         *      + Link: [https://reactjs.org/docs/react-component.html#unsafe_componentwillmount]
         */
        console.log("ComponentWillMount called");
    }

    render() {
        /**
         * Đây là phương thức chính mà các bạn sẽ thao tác nhiều nhất
         * - dùng để render ra React-DOM 
         * - Hàm render này nó return về jsx chứ không phải html. Các bạn đừng nhầm lần nhé
         *      JSX là gì ? EN-[https://reactjs.org/docs/introducing-jsx.html]
         *                  VI-[https://vi.reactjs.org/docs/introducing-jsx.html]
         * - Hàm này phải có return, nếu không sẽ có lỗi
         * - Một điểm bạn nên nhớ với return là luôn luôn phải có 1 root element bao bọc ở ngoài
         *   Ví dụ:
         *      <div>
         *          <div> Reactjs 1 </div>
         *          <div> Reactjs 2 </div>
         *      </div>
         *   ==>> Cách đúng
         * 
         *      <div> Reactjs 1 </div>
         *      <div> Reactjs 2 </div>
         *   ==>> Cách sai
         */
        console.log("Rendered called");
    }

    componentDidMount() {
        /**
         * - Phương thức này được gọi sau khi render được kích hoạt xong 
         * - Vì khi chạy đến đây, DOM đã được sinh ra nên hàm này được sử dụng rất nhiều
         * - Mình thường hay call API trong phương thức này, rồi sau đó dùng phương thức `setState`
         *  để render dữ liệu 
         * - Phương thức `setState` mình sẽ giải thích ở cuối file này
         */
        console.log("ComponentDidMount called")
    }

    /**
     * @name UPDATING 
     * - Một Component thực hiện Updating khi nó được render lần thứ 2 trở đi. 
     *      1.componentWillReceiveProps
     *      2.shouldComponentUpdate
     *      3.componentWillUpdate
     *      4.render
     *      5.componentDidUpdate
     * - React có cơ chế automatic binding (dựa vào this.state) cho nên Component 
     *  của bạn sẽ được update rất nhiều lần 
     * - Nó sẽ chạy theo thứ tự từ 1 -> 5
     */

    componentWillReceiveProps() {
        /**
         * Phương thức này 
         */
        console.log("ComponentWillReceiveProps called")
    }

    shouldComponentUpdate() {
        console.log("ShouldComponentUpdate called")
    }

    componentWillMount() {
        console.log("ComponentWillMount called");
    }

    render() {
        console.log("Rendered called");
    }

    componentDidMount() {
        console.log("ComponentDidMount called")
    }

}