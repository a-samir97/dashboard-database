import React from 'react'
import { Table, Modal } from 'antd';

export class TableModal extends React.Component {
    constructor(props){
        super(props)
    }

    showModal = () => {
        this.setState({
          visible: true,
        });
      };
      
      handleOk = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
    
      handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
    
    render() {
        return (
            <Modal
            title="Search"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
                <Table
                columns={ this.props.columns }
                dataSource={ this.props.data }
                >

                </Table>
            </Modal>
        )
    }
}