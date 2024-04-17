import { BaseEntity, BeforeInsert, BeforeUpdate, Check, Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty, MaxLength, maxLength, validateOrReject } from 'class-validator';
import { Table } from './table.entity';
import { Promotion } from './promotion.entity';
import { ProductSize } from './productSize.entity';

@Entity({ name: 'Carts' })
export class Cart extends BaseEntity {
  @PrimaryGeneratedColumn({type: 'int'})
  cartId: number;
  
  @Column({ name: 'tableId'})
  tableId: number;
  @IsNotEmpty()

  @Column({type: 'int', nullable:true})
  productSizeId: number;

  @Column({type: 'int', nullable:true})
  promotionId: number;

  @Column({type: 'int'})
  @Check('"quantity" > 0')
  quantity: number;

  @OneToMany(() => Table, (t) => t.carts)
  @JoinColumn({name: 'tableId', referencedColumnName: 'tableId'})
  table: Table;

  @ManyToOne(() => ProductSize, (p) => p.cart)
  @JoinColumn({name: 'productSizeId'})
  productSizes: ProductSize[];

  @ManyToOne(() => Promotion, (pr) => pr.cart)
  @JoinColumn({name: 'promotionId'})
  promotions: Promotion[];

  // HOOKS (AUTO VALIDATE)
  @BeforeInsert()
  @BeforeUpdate()
  async validate() {
    await validateOrReject(this);
  }
}
