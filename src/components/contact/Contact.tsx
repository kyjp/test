import React from 'react'

const Contact = () => {
  return (
    <div>
        <h1>お問い合わせフォーム</h1>
        <span title="close">X</span>
        <p>すべてのフィールドは必須項目です。</p>
        <img src="https://sample_img.png" alt="sample alt" />
        <div data-testid="custom-element">custom htmml</div>
        <form action="">
            <div>
                <label htmlFor="name">お名前</label>
                <input type="text" name="" id="name" placeholder='フルネーム' value="ShinCode" onChange={() => {}}/>
            </div>
            <div>
                <label htmlFor="email">メールアドレス</label>
                <input type="email" name="" id="email" />
            </div>
            <div>
                <label htmlFor="questions">お問い合わせ内容</label>
                <select name="" id="questions">
                    <option value="">お問い合わせ内容を選択してください。</option>
                    <option value="dev">開発案件のご相談</option>
                    <option value="video">撮影のご相談</option>
                    <option value="sns-marketing">SNSマーケティングのご相談</option>
                </select>
            </div>
            <div>
                <label htmlFor="">
                    <input type="checkbox" name="" id="terms" />
                    利用規約に同意します
                </label>
            </div>
            <button role='submit'>送信</button>
        </form>
    </div>
  )
}

export default Contact