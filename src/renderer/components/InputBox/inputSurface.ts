// The input box surface, shared with PendingActionBar so a pause can take over
// the same slot without the frame or the height shifting.
//
// Apple Liquid Glass 输入面板：
//   - 圆角 26px（规范 input radius）
//   - 白色 85% 半透明 + 真实背景模糊 30px
//   - 白 65% 细边框 0.5px（暗色下白 12%）
//   - 阴影：黑 6% / 20px / y5
export const INPUT_SURFACE_CLASS_NAME =
  'relative flex flex-col justify-between gap-xs rounded-[26px] bg-white/85 backdrop-blur-[30px] px-3 py-2 border-[0.5px] border-solid border-[var(--chatbox-input-border)] shadow-[0_5px_20px_rgba(0,0,0,0.06)] dark:bg-[#1C1C1E]/85 dark:shadow-[0_5px_20px_rgba(0,0,0,0.3)]'

/** Desktop only: keeps the swap between input and pause from jumping. */
export const INPUT_SURFACE_MIN_HEIGHT_CLASS_NAME = 'min-h-[92px]'

export const INPUT_SURFACE_STYLE = { borderWidth: '0.5px' }
