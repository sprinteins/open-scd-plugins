import { DOElement, DOTypeElement, LNodeTypeElement, SCDElement, SCDQueries } from "../scd/scd-query"
import { hashElement } from "../xml/hash"

/** 
 * The name is temporary, rename it if you have a better one
 * UC = Use Case
 */
export class UCTypeDedupe {

	constructor(
		private readonly scdQueries: SCDQueries,
	){}

	public async findDuplicateObjectTypes(): Promise<HashedDOT[][]> {
		const dots = this.scdQueries.searchDOTypes()
		
		const hashedDots: HashedDOT[] = await Promise.all(
			dots.map(this.createHashedDot.bind(this)),
		)
		const grouped = this.groupByHash(hashedDots)
		const duplicates = Object.values(grouped).filter(group => group.length > 1)
		
		return duplicates
	}

	private findUsageOfDOT(dotId: string): DOElement[] {
		const dos = this.scdQueries.searchDOsByType(dotId)
		return dos
	}

	private findUserElements(dotId: string): SCDElement[] {
		const elements = this.scdQueries.searchElementsByTypeAttr(dotId)
		return elements
	}

	private async createHashedDot(dot: DOTypeElement): Promise<HashedDOT>{
		const hash = await hashElement(dot.element)
		const usages = this.findUserElements(dot.id)
		return {
			element: dot,
			hash,
			usages,
		}
	}

	private groupByHash(dots: HashedDOT[]): GroupedHashedDOT {
		const grouped: GroupedHashedDOT = {}
		for (const dot of dots) {
			if (!grouped[dot.hash]) {
				grouped[dot.hash] = []
			}
			grouped[dot.hash].push(dot)
		}
		return grouped
	}

	
}

export type HashedDOT = {
	element: DOTypeElement,
	hash: string
	usages: SCDElement[]
}

type GroupedHashedDOT = {
	[hash: string]: HashedDOT[]
}