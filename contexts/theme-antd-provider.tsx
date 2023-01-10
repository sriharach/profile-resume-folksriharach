import { ConfigProvider } from 'antd'
import { NextChildren } from '@/interfaces/next-interface'

const ThemeAntdProvider = ({ children }: NextChildren) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#35363dfd',
        },
      }}
    >
      {children}
    </ConfigProvider>
  )
}

export default ThemeAntdProvider
