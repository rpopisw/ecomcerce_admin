import { query } from 'express'
import { restart } from 'nodemon'
import models from '../models'

export default {

    add: async (req,res,next) => {
         try {
             const reg = await models.Category.create(req.body)
             res.status(200).json(reg)
         } catch (err) {
             res.status(500).send({
                 "message":"Error"
             });
             next(err)
         }
    },
    query: async (req,res,next) => {
        try {
            const reg = await models.Category.findOne({_id:req.query._id})
            (!reg)? res.status(404).send({"message":"no existe"}):res.status(200).json(reg)
            res.status(200).json(reg)
        } catch (error) {
            res.status(500).send({
                "message":"Error"
            });
            next(err)
        }
    },
    list: async (req,res,next) => {
        try {
            const reg = await models.Category.find()
            res.status(200).json(reg)
        } catch (error) {
            res.status(500).send({
                "message":"Error"
            });
            next(err)
        }
    },
    update: async (req,res,next) => {
        try {
            const reg = await models.Category.findByIdAndUpdate({_id:req.body._id},{name:req.body.name})
            res.status(200).json(reg)
        } catch (error) {
            res.status(500).send({
                "message":"Error"
            });
            next(err)
        }
    },
    remove: async (req,res,next) => {
        try {
            const reg = await models.Category.remove({_id:req.body._id})
            res.status(200).json(reg)
        } catch (error) {
            res.status(500).send({
                "message":"Error"
            });
            next(err)
        }
    },
    activate: async (req,res,next) => {
        try {
            const reg = await models.Category.findByIdAndUpdate({_id:req.body._id},{status:1})
            res.status(200).json(reg)
        } catch (error) {
            res.status(500).send({
                "message":"Error"
            });
            next(err)
        }
    },
    desactivate: async (req,res,next) => {
        try {
            const reg = await models.Category.findByIdAndUpdate({_id:req.body._id},{status:0})
            res.status(200).json(reg)
        } catch (error) {
            res.status(500).send({
                "message":"Error"
            });
            next(err)
        }
    }

}