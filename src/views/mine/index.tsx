import { defineComponent } from 'vue'
import {
  ElContainer,
  ElHeader,
  ElMain,
  ElButton,
  ElRow,
  ElCol,
  ElSpace,
} from 'element-plus'
import { RouterLink } from 'vue-router'
import styles from './index.module.less'

export default defineComponent({
  props: {
    message: String,
  },
  setup(props) {
    return () => (
      <ElContainer class={styles['container']}>
        <ElHeader class={styles['header']}>
          <ElRow
            class={styles['row']}
            justify='start'
          >
            <ElCol span={2}>
              <ElSpace alignment='center'>
                在线简历
              </ElSpace>
            </ElCol>
            <ElCol span={6}>
              <ElSpace size={10}>
                <RouterLink to='/home'>
                  <ElButton type='primary'>
                    热门模板
                  </ElButton>
                </RouterLink>
                <RouterLink to='/home'>
                  <ElButton type='primary'>
                    我的简历
                  </ElButton>
                </RouterLink>
              </ElSpace>
            </ElCol>
          </ElRow>
        </ElHeader>
        <ElMain class={styles['main']}>
          简历模板卡片
        </ElMain>
      </ElContainer>
    )
  },
})
