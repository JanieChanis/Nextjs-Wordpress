import { CallToActionButton } from "components/CallToActionButton"
import { Column } from "components/Column"
import { Columns } from "components/Columns"
import { Cover } from "components/Cover"
import { Heading } from "components/Heading"
import { Paragraph } from "components/Paragraph"
import { theme } from "theme"

export const BlockRenderer = ({ blocks }) => {
	return blocks?.map(block => {
		switch (block.name) {
			case "acf/ctabutton": {
				return (
					<CallToActionButton
						key={block.id}
						buttonLabel={block.attributes.data.label}
						destination={block.attributes.data.destination || "/"}
						align={block.attributes.data.align}
					/>
				)
			}
			case 'core/paragraph': {
				return (
					<Paragraph
						key={block.id}
						textAlign={block.attributes.align}
						content={block.attributes.content}
						textColor={theme[block.attributes.textColor] || block.attributes.style?.color?.text}
					/>
				)
			}
			case 'core/heading': {
				return (
					<Heading
						key={block.id}
						level={block.attributes.level}
						content={block.attributes.content}
						textAlign={block.attributes.textAlign}
					/>
				)
			}
			case 'core/cover': {
				console.log("BLOCK: ", block)
				return (
					<Cover
						key={block.id}
						background={block.attributes.url}>
						<BlockRenderer blocks={block.innerBlocks} />
					</Cover>
				)
			}
			case "core/columns": {
				console.log("COLUMNS: ", block.attributes);
				return (
					<Columns
						key={block.id}
						isStackedOnMobile={block.attributes.isStackedOnMobile}
					// textColor={
					// 	theme[block.attributes.textColor] ||
					// 	block.attributes.style?.color?.text
					// }
					// backgroundColor={
					// 	theme[block.attributes.backgroundColor] ||
					// 	block.attributes.style?.color?.background
					// }
					>
						<BlockRenderer blocks={block.innerBlocks} />
					</Columns>
				)
			}
			case "core/column": {
				return (
					<Column
						key={block.id}
						width={block.attributes.width}
					// textColor={
					// 	theme[block.attributes.textColor] ||
					// 	block.attributes.style?.color?.text
					// }
					// backgroundColor={
					// 	theme[block.attributes.backgroundColor] ||
					// 	block.attributes.style?.color?.background
					// }
					>
						<BlockRenderer blocks={block.innerBlocks} />
					</Column>
				);
			}
			default: {
				console.log("UNKNOWN: ", block);
				return null
			}
		}
	})
}