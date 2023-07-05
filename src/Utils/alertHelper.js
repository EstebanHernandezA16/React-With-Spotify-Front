import Swal from "sweetalert2"



export const  alertHelper = (title,icon,color,message,timer) =>{

    const icons = ['success','error','warning','question','info'];

    Swal.fire({
        title:title,
        icon:icons[icon],
        iconColor: color,
        text:message,
        timer: timer,
        confirmButtonText: 'Ok',
        confirmButtonColor: '#005a93'
    })

}

export const alertWithConfirmation = (title,icon,color,message) =>{
    const icons = ['success','error','warning','question','info'];

    return new Promise((resolve)=>{
        Swal.fire({
            title:title,
            icon:icons[icon],
            iconColor: color,
            text:message,
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
        }).then((result)=>{
            resolve(result.isConfirmed)
        })
    })
}