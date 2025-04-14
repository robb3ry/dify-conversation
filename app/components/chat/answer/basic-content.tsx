import type { FC } from 'react'
import { memo } from 'react'
import type { ChatItem } from '../../types'
import { Markdown } from '@/app/components/base/markdown'
import {MarkdownTable} from '@/app/components/base/markdown-table'
import cn from '@/utils/classnames'

interface BasicContentProps {
  item: ChatItem
}
const BasicContent: FC<BasicContentProps> = ({
  item,
}) => {
  const {
    annotation,
    content,
  } = item

  if (annotation?.logAnnotation)
    return <Markdown content={annotation?.logAnnotation.content || ''} />
  const parseContent = JSON.parse(content);
  const isStrContent = typeof parseContent === 'string'; // 另外还要加标识
  const isGetInfoFailed = Object.prototype.toString.call(parseContent) === '[object Object]' && parseContent.__is_success === 0;
  return (
    (isStrContent || isGetInfoFailed)? (<Markdown
      className={cn(
        item.isError && '!text-[#F04438]',
      )}
      content={content}
    />):(<MarkdownTable
      className={cn(
        item.isError && '!text-[#F04438]',
      )}
      content={content}
    />)
  )
}

export default memo(BasicContent)
