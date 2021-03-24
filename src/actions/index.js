//actionとはJavascriptのライブラリのこと
//アクションを定義アクションreturn
//のちに適切な状態宣言をするための仕組みを作っている
export const INCREMENT = 'INCREMENT'//この文字列はreducerでつかう
export const DECREMENT = 'DECREMENT'//この文字列はreducerでつかう

export const increment = () => ({//コンポーネント側で使うからexportしとく
  type: 'INCREMENT'//この文字列はreducerでつかう
})

export const decrement = () => ({
    type: 'DECREMENT'//この文字列はreducerでつかう
})
