import { getMockupForSlug } from '@/config/docs/mockups'
import { docsCopy } from '@/config/docs/copy'
import { MockupPresetBody } from '@/components/docs/mockups/mockup-preset-body'
import { mockupStyles } from '@/components/docs/mockups/mockup-styles'

type DocPageLowFiMockupProps = {
  slugPath: string
}

export function DocPageLowFiMockup({ slugPath }: DocPageLowFiMockupProps) {
  const def = getMockupForSlug(slugPath)
  if (!def) return null

  return (
    <figure
      className="not-prose mb-8"
      aria-label={docsCopy.mockup.figureLabel}
    >
      <p className={mockupStyles.hint}>{docsCopy.mockup.structuralHint}</p>
      <div className={mockupStyles.frame}>
        <MockupPresetBody preset={def.preset} />
      </div>
      <figcaption className={mockupStyles.caption}>{def.caption}</figcaption>
    </figure>
  )
}
