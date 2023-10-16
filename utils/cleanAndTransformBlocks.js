// import { v4 as uuid } from 'uuid'

// export const cleanAndTransformBlocks = (blocksJSON) => {
// 	const blocks = JSON.parse(JSON.stringify(blocksJSON))
// 	// console.log("BLOCKS B: ", typeof blocks);
// 	// console.log("BLOCKS B2: ", blocks);

// 	const assignIds = (b) => {
// 		b?.forEach((block) => {
// 			// console.log("BLOCK", block);
// 			// block.id = uuid().toString()
// 			block = { ...block, id: "wags" }
// 			if (block.innerBlocks?.length) {
// 				assignIds(block.innerBlocks)
// 			}
// 			return block
// 		})
// 	}

// 	assignIds([blocks])

// 	return blocks
// }

import { v4 as uuid } from "uuid"

export const cleanAndTransformBlocks = (blocksJSON) => {
	const blocks = JSON.parse(JSON.stringify(blocksJSON))

	const assignId = (b) => {
		if (typeof (b) == "object") {
			b.forEach((block) => {
				block.id = uuid()
				if (block.innerBlocks?.length) {
					assignId(block.innerBlocks)
				}
			})
		}
	}

	assignId(blocks)

	return blocks
}