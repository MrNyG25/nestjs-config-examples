import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

import { Cat } from 'src/api/cat/entities/cat.entity';


@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    username!: string;

    @Column({ type: 'varchar', length: 255 })
    email!: string;

    @Column({ type: 'boolean', default: true })
    status!: boolean;

    @OneToMany(() => Cat, (cat) => cat.user) // note: we will create author property in the Photo class below
    cats: Cat[];

    //timestamps
    @CreateDateColumn()
    created_at?: Date;
    @UpdateDateColumn()
    updated_at?: Date;
}
