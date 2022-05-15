import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('cats')
export class Cat {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 255})
    breed!: string;

    @Column({type: 'text', nullable: true})
    description?: string;

    @Column({type: 'simple-array'})
    tags!: string[];

    @Column({ type: 'varchar', length: 100 })
    category!: string;

    @Column({type: 'boolean'})
    status!: boolean;

    //timestamps
    @CreateDateColumn()
    created_at?: Date;
    @UpdateDateColumn()
    updated_at?: Date;
}
