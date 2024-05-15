import { Entity } from "@backstage/catalog-model";
import { EntityFilter } from "@backstage/plugin-catalog-react";

export class BusinessAreaFilter implements EntityFilter {
    constructor(readonly values: string[]) {}
  
    filterEntity(entity: Entity): boolean {
        console.log('acacito');
        return true;
//      return this.values.every(v => (entity.metadata.businessAreas?? []).includes(v));
    }
  
    getCatalogFilters(): Record<string, string | string[]> {
        console.log('acacito!');
      return { 'metadata.businessAreas': this.values };
    }
  
    toQueryValue(): string[] {

        console.log('acacito2');
        console.log(this.values);
        debugger;
      return this.values;
    }
  }
  