import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./Users";

import { Group } from "./Groups";
import { StatusMsgType } from "../types/MessageType";
import { v4 } from "uuid";

@Entity("messages")
export class Message extends BaseEntity {

    constructor(){
        super()
        if(!this.id){
            this.id = v4();
        }
    }
    @PrimaryColumn({ 
        primary: true 
    })
    id: string;

    @Column({
        type: 'varchar'
    })    
    text: string;

    @Column({
        type: 'varchar',
        default: 'sended'
    })    
    status: StatusMsgType;

    @Column({
        type: 'varchar'
    })
    user_id: string;

    @Column({
        type: 'varchar'
    })
    group_id: string;

    @CreateDateColumn()
    created_at: Date;

    @ManyToOne(() => User, user => user.messages)
    @JoinColumn({name: "user_id"})
    user: User;

    @ManyToOne(() => Group, group => group.messages)
    @JoinColumn({name: "group_id"})
    group: Group;

    

}