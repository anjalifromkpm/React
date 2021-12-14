import React, { Component } from 'react'

class One extends Component {
    render() {
        return (
            <>
               <div className='w-50 m-auto my-4'>
                   {JSON.stringify(this.props.lenghtofInput)}
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">User Name</label>
                            <input type="text" class="form-control" name="name" onChange={this.props.updateData}/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" name="email" onChange={this.props.updateData} />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <i class="bi bi-eye ps-3"></i>
                            <input type="password" class="form-control" name="password" onChange={this.props.updateData} />
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" onChange={this.props.updateData} />
                            <label class="form-check-label" name="checkme" value="CSS">CSS</label>
                        </div>
                        <div class="mb-3">
                            <textarea placeholder='Message' name="message" className='form-control mb-2' min="10" max="100" onChange={this.props.updateData} onChange={this.props.messageHandler}></textarea>
                            <p><span>Remaining Characters: &nbsp;</span><b>{JSON.stringify(this.props.lenghtofInput.count)}</b></p>
                        </div>
                        <button type="submit" class="btn btn-dark" onClick={this
                        .props.prev}>Submit</button>
                    </form>
               </div>
            </>
        )
    }
}

export default One;
