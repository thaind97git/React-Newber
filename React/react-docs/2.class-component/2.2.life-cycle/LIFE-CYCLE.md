[Document-Life-Cycle](https://reactjs.org/docs/state-and-lifecycle.html)

# React-Life-Cycle

## 1. MOUNTING 
```
1.componentWillMount.
2.render
3.componentDidMount
```

- Một `Component` thực hiện `Mounting` chỉ khi nó được render lần đầu tiên.

- Khi render lần thứ 2 nó sẽ chạy một `life-cycle` khác

- Việc mouting một `Component` nó sẽ chạy theo thứ tự từ 1 -> 3

### I. componentWillMount
- Phương thức này được gọi trước khi Component được render.

- Nó tương tự như `$(document).ready()` trog jquery

- Khi phương thức này được gọi, DOM vẫn chưa được sinh ra

- Kể từ phiên bản `16.999.0`, phương thức này không được dùng nữa [Link](https://reactjs.org/docs/react-component.html#unsafe_componentwillmount)

### II. render
- Đây là phương thức chính mà các bạn sẽ thao tác nhiều nhất

- dùng để render ra React-DOM 

- Hàm render này nó return về jsx chứ không phải html. Các bạn đừng nhầm lần nhé
    - JSX là gì ? [EN](https://reactjs.org/docs/introducing-jsx.html), [VN](https://vi.reactjs.org/docs/introducing-jsx.html)

- Hàm này phải có return, nếu không sẽ có lỗi

- Một điểm bạn nên nhớ với return là luôn luôn phải có 1 root element bao bọc ở ngoài

Vd:
```
<div>
    <div> Reactjs 1 </div>
    <div> Reactjs 2 </div>
</div>
==>> Cách đúng
```
```
<div> Reactjs 1 </div>
<div> Reactjs 2 </div>
==>> Cách sai
```
Nếu bạn không muốn dùng `root element` để bao bọc ở ngoài. Bạn có thể dùng [React.Fragment](https://reactjs.org/docs/fragments.html). Mình sẽ giải thích về `React.Fragment` rõ hơn trong folder others nhé !

### III. componentDidMount
- Phương thức này được gọi sau khi render được kích hoạt xong 

- Vì khi chạy đến đây, DOM đã được sinh ra nên hàm này được sử dụng rất nhiều

- Mình thường hay call API trong phương thức này, rồi sau đó dùng phương thức `setState` để render dữ liệu.

## 2. UPDATING 
```
1.shouldComponentUpdate
2.static getDerivedStateFromProps
3.render
4.getSnapshotBeforeUpdate
5.componentDidUpdate
```
- Một `Component` thực hiện `Updating` khi nó được render lần thứ 2 trở đi.

- React có cơ chế automatic binding (dựa vào this.state) cho nên `Component` của bạn sẽ được update rất nhiều lần 

- Nó sẽ chạy theo thứ tự từ 1 -> 4

### I. shouldComponentUpdate
- `shouldComponentUpdate(nextProps, nextState)`

- Hàm được gọi trước khi `render`.

- Hàm sẽ trả về Boolean (true/false) || Mặc định sẽ `return true` nếu bạn không implement. 

- Dựa vào kết quả trả về của hàm này, React sẽ biết được component có nên update hay không.

- So sánh `this.props ==? nextProps` và `this.state ==? nextState` để quyết định xem hàm trả về `true hay false`. Nếu là `false` thì `Component` sẽ không được `re-render`

**Note:**

*- Phương thức này xuất hiện để tối ưu hóa hiệu suất (Ngăn không cho Component re-render tùy ý). Vì vậy chỉ dùng nó khi bạn muốn tối ưu hóa Component*

*- Nếu phương thức này return false, Chính nó và những component con sẽ không được re-render khi state được thay đổi*

*- Không nên dùng deepclone hoặc JSON.stringify() để so sánh trong phương thức này. Nó sẽ làm giảm hiệu suất*
### II. getDerivedStateFromProps
    // Cần người support

### III. render
    // Theo dõi ở MOUNTING
### IV. getSnapshotBeforeUpdate
    // Cần người support
### IV. componentDidUpdate
- `componentDidUpdate(prevProps, prevState, snapshot)`
- `snapshot` sẽ là giá trị được trả về từ phương thức `getSnapshotBeforeUpdate` (Default là undefined)
- Phương thức này được gọi sau khi `Component` đã được update
- Tại phương thức này, DOM đã được xuất hiện nên các bạn có thể thoải mái thao tác với DOM.
- Bạn có thể gọi phương thức `setState` trong này nhưng phải được wrap bởi 1 condition. Nếu không nó sẽ xuất hiện vòng lặp vô hạn

    Ex: 
    ```
    componentDidUpdate(prevProps) {
        if (this.props.userID !== prevProps.userID) {
            // Thực hiện this.setState
        }
    }
    ```
**Note:**

*- Phương thức này sẽ không được gọi nếu phương thức shouldComponentUpdate return false*

## 3. UNMOUNTING
```
componentWillUnmount
```
- Trạng thái Unmounting được gọi khi component được remove ra khỏi DOM

### I.componentWillUnmount
- Phương thức này được gọi khi `Component` được `unmount` hoặc `destroy`
- Một số hành động được dùng trong phương thức này: Cleanup data của Component, hủy các hàm timer, hủy call API hoặc cleaning up bất kì subscriptions nào được tạo trong `componentDidMount`

**Note:**

*- Không nên gọi this.setState trong phương thức này (điều này là vô nghĩa) vì Component sẽ không được re-render trong phương thức này*