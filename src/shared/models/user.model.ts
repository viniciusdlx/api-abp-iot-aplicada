import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserModel {
    @PrimaryGeneratedColumn({ type: 'int' })
    id: number;

    @Column({
        name: 'external_id',
        type: 'varchar',
        length: 36,
        nullable: true,
        default: null,
    })
    externalId: string;

    @Column({ name: 'name', type: 'varchar', length: 255 })
    name: string;

    @Column({ name: 'email', type: 'varchar', length: 255 })
    email: string;

    @Column({ name: 'password', type: 'text' })
    password: string;

    @Column({
        name: 'biometry',
        type: 'varchar',
        length: 255,
        nullable: true,
        default: null,
    })
    biometry: string;

    @Column({
        name: 'rfid',
        type: 'varchar',
        length: 255,
        nullable: true,
        default: null,
    })
    rfid: string;
}
