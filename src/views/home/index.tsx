import { defineComponent } from 'vue'
import { ElContainer, ElHeader, ElMain, ElButton, ElRow, ElCol, ElSpace } from 'element-plus'
import { RouterLink } from 'vue-router'
import styles from './index.module.less'

export default defineComponent({
  props: {
    message: String
  },
  setup(props) {

    return () => (
      <ElContainer>
        <ElHeader class={styles['header']}>
          <ElRow class={styles['row']} justify="space-between">
            <ElCol span={8}>
              <ElSpace alignment="center">
                在线简历
              </ElSpace>
            </ElCol>
            <ElCol span={6}>
              <ElSpace size={10}>
                <RouterLink to="/home">
                  <ElButton type="primary">
                    首页
                  </ElButton>
                </RouterLink>
                <RouterLink to="/square">
                  <ElButton type="primary">
                    模板
                  </ElButton>
                </RouterLink>
                <RouterLink to="/home">
                  <ElButton type="primary">
                    内推
                  </ElButton>
                </RouterLink>
                <RouterLink to="/editor">
                  <ElButton type="primary">
                    开始使用
                  </ElButton>
                </RouterLink>
              </ElSpace>

            </ElCol>

          </ElRow>

        </ElHeader>
        <ElMain class={styles['main']}>

        </ElMain>
      </ElContainer>
    )
  }
})