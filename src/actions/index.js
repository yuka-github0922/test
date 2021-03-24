//actionとはJavascriptのライブラリのこと
//まとめて定義しとく
export const INCREMENT = 'INCREMENT'//この文字列はreducerでつかう
export const DECREMENT = 'DECREMENT'//この文字列はreducerでつかう

export const increment = () => ({//コンポーネント側で使うからexportしとく
  type: 'INCREMENT'//この文字列はreducerでつかう
})
export const decrement = () => ({
    type: 'DECREMENT'//この文字列はreducerでつかう
  })
