[Document-State](https://reactjs.org/docs/react-component.html#state)

# React-State

## 1. state 
- `state` là một object lưu trữ trạng thái `Component` của bạn
- Khai báo `state` cũng tương tự như khai báo một  object bình thường, nhưng nó là nơi để React nhận biết `Component` có nên `re-render` hay không
- Nó luôn luôn phải là một object với `muilti keys` nếu không sẽ có warning: `Warning: App.state: must be set to an object or null`
- Giá trị các key trong `this.state` sẽ là giá trị khởi tạo của bạn
- Nếu bạn có khởi tạo `constructor`, thì phải khai báo là `this.state` và nằm trong constructor.
- Nếu không khởi tạo `constructor`, khai báo nó là `state`
    
    Note:
        
    - Khuyến khích khai báo với `this.state`.

## 2. this.setState
Cú pháp: `this.setState(updater[, callback])`
```
updater: (state, props) => stateChange
- state (currentState) là `this.state` hiện tại của component
- props là các giá trị nhận được từ bên ngoài khi Component này được dùng (Mình sẽ giải thích về props ở mục 3)
callback: () => { ... }
```
- Đây là hàm dùng để set lại `this.state`
- Đây là hàm asynchronous, vì vậy nếu bạn muốn làm gì đó dựa vào `state` mà bạn vừa thay đổi thì bạn phải làm nó bên trong hàm callback
- Khi dùng `setState`, nên áp dụng imutability. Có nghĩa là coppy state ra một object mới
- Thông tin thêm: [imutability](https://viblo.asia/p/immutability-va-immutablejs-trong-reactjs-m68Z0OrdKkG), [deep clone and shadow clone](https://viblo.asia/p/su-khac-nhau-giua-deep-copy-va-shallow-copy-trong-javascript-4dbZN3qylYM)

```
this.state = { username: "username initial" }

this.setState((currentState, props) => {
    return { username: "username updated" }
}, () => {
    console.log(this.state.username)
    >> username updated
})
console.log(this.state.username)
>> username initial
```
Các bạn có thể viết ngắn gọn lại như thế này nếu chỉ muốn `update state` chứ không cần đến `currentState` và `props`(truyền 1 object vào setState):
```
this.state = { username: "username initial" }

this.setState({ 
    username: "username updated" 
}, () => {
    console.log(this.state.username)
    >> username updated
})
console.log(this.state.username)
>> username initial
```

Một ví dụ về imutability trong `setState`.
Luôn luôn dùng cách này nếu object state của bạn có từ 2 keys trở lên
```
this.state = { 
    username: "username initial",
    password: "password initial"
}

// Cập nhật giá trị của `username` thành "username updated"
// `...` được gọi là `Spread Operator`
this.setState({
    ...this.state,
    username: "username updated"
})
```

## 3. props
- props là một object chứa các `key: value` mà bạn truyền vào Component khi bạn dùng nó

Vd:
```
class PropsComponent extends React.Component {
    render() {
        console.log(this.props)
        >> Object {propKey1: "This is prop 1", propKey2: "This is prop 2"}
        console.log(this.props.propKey1)
        >> "This is prop 1"
        console.log(this.props.propKey2)
        >> "This is prop 2"
        return <div></div>
    }
}

// khi bạn dùng nó và truyền vào nó cặp key: value
const prop2 = "This is prop 2"
<PropsComponent propKey1="This is prop 1" propKey2={prop2} />
```

## Tóm tắt
1. State là 1 object lưu trữ trạng thái của Component
2. this.setState là một hàm dùng để cập nhật lại state mà bạn định nghĩa
3. props là object chứa các cặp `key: value` mà bạn đã truyền vào khi bạn dùng Component

Ví dụ thực tế về props mà mình đã làm đó là build 1 Input layout, các bạn có thể nhìn vào để tham khảo:
```
export const TextInput = (props) => {
    // Ở đây mình khai báo destructoring để lấy các keys trong props.
    // Vì mình sử dụng `functinal Component` cho nên không cần this.props. 
    // Mình sẽ giải thích rõ hơn trong phần functional Compoennt    
    const { 
        name,
        label,
        value,
        onChange,
        disabled,
        customClass,
        ...others // Ở đây mình dùng `Rest Operator`. các bạn có thể search google để xem nó là gì
    } = props
    return (
        <div className="field text">
            <input 
                className={customClass}
                name={name}
                type="text"
                disabled={disabled}
                value={value}
                onChange={e => onChange(e)}
                {...others}
        />
        <label>{label}</label>
        </div>
    )
}
// Khi dùng
<TextInput
    label="Email"
    customClass="class-custom-input"
    disabled={false}
    name="email"
    value={this.state.email}
    onChange={event => {
        console.log(event)
    }}
    onClick={...} // prop này được nhận như là ...others trong TextInput
    onBlur={...} // prop này được nhận như là ...others trong TextInput
/>
```
